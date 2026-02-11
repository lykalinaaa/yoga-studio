import {computed, onMounted, onUnmounted, type Ref, ref} from "vue";

export function useWindowWidth(): { windowWidth: Ref<number> } {
  const windowWidth = ref<number>(window.innerWidth)

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth)
  })

  return { windowWidth }
}