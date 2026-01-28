import type { ScrollAnimateInstance, BindingLike } from '../src/scroll-animate'

interface FixtureOptions {
  previousClassName?: string
  animationClass: string | Record<string, string>
  repeat?: boolean
  offset?: number
}

interface Fixture {
  el: HTMLElement
  binding: BindingLike
  getClassName: () => string
  getClassNames: () => string[]
  scrollDown: (isInView: boolean) => void
  scrollUp: (isInView: boolean) => void
}

export default function createFixture(
  instance: ScrollAnimateInstance,
  { previousClassName = '', animationClass, repeat = false, offset = 0 }: FixtureOptions
): Fixture {
  function run(this: Fixture, isInView: boolean, isUpwards = false, off = 0) {
    instance.isInView = () => isInView
    instance.run(this.el, this.binding, { offset: off, isUpwards, previousClassName, useParent: false })
  }

  return {
    el: {
      className: previousClassName,
      getBoundingClientRect() { return {} as DOMRect }
    } as unknown as HTMLElement,
    binding: {
      value: animationClass,
      modifiers: { repeat }
    },
    getClassName(this: Fixture) { return this.el.className.trim() },
    getClassNames(this: Fixture) { return this.getClassName().split(' ') },
    scrollDown(this: Fixture, isInView: boolean) {
      run.call(this, isInView, false, offset)
    },
    scrollUp(this: Fixture, isInView: boolean) {
      run.call(this, isInView, true, offset)
    }
  }
}
