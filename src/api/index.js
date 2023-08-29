import axios from "axios"
import mpAdapter from "axios-miniprogram-adapter"
import { useAppStore } from "@/store/index"

axios.defaults.adapter = mpAdapter
//超时时间
axios.defaults.timeout = 20000

const reg = /[\n\r\b\t]/g
axios.interceptors.request.use(
  (config) => {
    const { data, params, url } = config
    if (Object.prototype.toString.call(data) == "[object Object]") {
      for (let index in data) {
        let item = data[index]
        if (Object.prototype.toString.call(item) == "[object String]") {
          data[index] = item.trim().replace(reg, "")
        }
      }
    }
    if (Object.prototype.toString.call(params) == "[object Object]") {
      for (let index in params) {
        let _item = params[index]
        if (Object.prototype.toString.call(_item) == "[object String]") {
          params[index] = _item.trim().replace(reg, "")
        }
      }
    }
    if (url.indexOf("?") != -1) {
      const theRequest = new Object()
      let baseUrl = url.substring(0, url.indexOf("?") + 1),
        arg_in_Url = url.substring(url.indexOf("?") + 1, url.length + 1)
      if (arg_in_Url.length > 0) {
        let strs = arg_in_Url.split("&")
        for (let item of strs) {
          let key = item.split("=")[0],
            val = decodeURI(item.split("=")[1])
          theRequest[key] =
            Object.prototype.toString.call(val) == "[object String]"
              ? val.trim().replace(reg, "")
              : val
        }
        for (let item in theRequest) {
          baseUrl += `${item}=${theRequest[item]}&`
        }
        config.url = baseUrl
      }
    }

    const app = useAppStore()
    const token = store.accesToken
    // 全局设定token，用于子应用接受token，防止页面初始进入后再进入其他模块获取不到token值导致页面查询失败
    // 设置登录和快速登录的接口地址
    const isLogin = config.url.indexOf("/Users/md5Login")
    const isFastLogin = config.url.indexOf("/GuestApplets/login")
    if (token && isLogin === -1 && isFastLogin === -1) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.common["access_token"] = `${token}`
      // config.params = { access_token: token }
      // config.url +=
      //   config.url.indexOf("?") > -1
      //     ? `access_token=${token}`
      //     : `?access_token=${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    const status =
      response.status || response.data.status || response.data.code || 200
    if (status === 401) {
      uni.navigateTo({
        url: "login",
      })
    } else if (status === 200) {
      const data = response.data || response.data.datas
      const type = Object.prototype.toString.call(data)
      if (type == "[object String]") {
        data = data.trim().replace(reg, "")
      }
      if (type == "[object Object]") {
        for (let index in data) {
          let item = data[index]
          if (Object.prototype.toString.call(item) == "[object String]") {
            data[index] = item.trim().replace(reg, "")
          }
        }
      }
      if (type == "[object Array]") {
        for (let item of data) {
          let item_type = Object.prototype.toString.call(item)
          if (item_type == "[object String]") {
            item = item.trim().replace(reg, "")
          } else if (item_type == "[object Object]") {
            for (let index in item) {
              let itm = item[index]
              if (Object.prototype.toString.call(itm) == "[object String]") {
                item[index] = itm.trim().replace(reg, "")
              }
            }
          } else if (item_type == "[object Array]") {
            for (let ind of item) {
              if (Object.prototype.toString.call(ind) == "[object String]") {
                ind = ind.trim().replace(reg, "")
              }
            }
          }
        }
      }
    }
    return response
  },
  (error) => {
    const app = useAppStore()
    // 跳转到登录页面
    const status =
      error.status ||
      (error.response &&
        (error.response.status ||
          error.response.data.status ||
          error.response.data.error.status)) ||
      undefined
    if (status === 401) {
      error.message = "未获取到用户信息，请重新登录"
      app.clearStorage()
      uni.reLaunch({
        url: "/pages/login/login",
      })
      uni.showToast({
        title: error.message,
      })
    }
    if (status === 500) {
      error.orig =
        error.orig ||
        error.response.orig ||
        error.response.data.orig ||
        error.response.data.error.orig
    }
    return Promise.reject(error)
  }
)
