import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppStore = defineStore("app", () => {
  const appName = ref("Hello Uniapp!")
  const acces_token = ref("")

  const setAppName = (name) => {
    appName.value = name
  }
  const clearStorage = () => {
    uni.clearStorage();
    acces_token.value = ''
  }
  return {
    appName,
    acces_token,
    setAppName,
    clearStorage
  }
})
