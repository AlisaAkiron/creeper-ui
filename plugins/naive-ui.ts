import { setup } from '@css-render/vue3-ssr'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp)
    const originalRenderMeta = nuxtApp.ssrContext?.renderMeta
    nuxtApp.ssrContext = nuxtApp.ssrContext ?? undefined
    nuxtApp.ssrContext!.renderMeta = () => {
      if (!originalRenderMeta) {
        return {
          headTags: collect(),
        }
      }
      const originalMeta = originalRenderMeta()
      if ('then' in originalMeta) {
        return originalMeta.then((resolvedOriginalMeta) => {
          return {
            ...resolvedOriginalMeta,
            headTags: resolvedOriginalMeta['headTags'] + collect(),
          }
        })
      } else {
        return {
          ...originalMeta,
          headTags: originalMeta['headTags'] + collect(),
        }
      }
    }
  }
})
