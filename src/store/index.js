import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppStore = defineStore("app", () => {
  const appName = ref("Hello Uniapp!")
  const setAppName = (name) => {
    appName.value = name
  }
  return {
    appName,
    setAppName,
  }
})
