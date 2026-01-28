import type { App } from 'vue'
import ScrollAnimate from './scroll-animate'

export { ScrollAnimate }

export default {
  install(app: App) {
    app.directive('animate-onscroll', {
      mounted(el: HTMLElement, binding) {
        const scrollAnimate = ScrollAnimate()
        const params = binding.value
        const useParent = el.parentNode!.childNodes.length === 1
        const offset = parseInt((el as HTMLElement).dataset.animateOnscrollOffset || '0')
        let previousClassName = el.className
        let lastScrollTop = window.pageYOffset
        previousClassName = previousClassName
          .replace((params.in || params), '')
          .replace(params.out, '')

        window.addEventListener('scroll', function () {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const isUpwards = scrollTop < lastScrollTop
          scrollAnimate.run(el, binding, { useParent, offset, isUpwards, previousClassName })
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
        }, false)
      }
    })
  }
}
