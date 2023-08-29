import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppStore = defineStore("app", () => {
  const appName = ref("Hello Uniapp!")

  const accesToken = ref("")
  const setAppName = (name) => {
    appName.value = name
  }
  const clearStorage = () => {
    uni.clearStorage()
    accesToken.value = ""
  }

  const active = ref(0)
  const changeActive = (event) => {
    active.value = event.detail
  }

  return {
    active,
    appName,
    accesToken,
    setAppName,
    clearStorage,
    changeActive
  }
})
