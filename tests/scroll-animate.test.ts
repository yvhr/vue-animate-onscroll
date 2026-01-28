import { describe, test, expect, beforeEach, vi } from 'vitest'
import ScrollAnimate from '../src/scroll-animate'
import type { ScrollAnimateInstance } from '../src/scroll-animate'
import createFixture from './utils'

describe('ScrollAnimate', function () {
  let scrollAnimate: ScrollAnimateInstance

  beforeEach(() => { scrollAnimate = ScrollAnimate() })

  describe('General tests', () => {
    test('should not remove existing classes', () => {
      const previousClassName = 'default'
      const animationClass = 'flip'
      const fixture = createFixture(
        scrollAnimate, { previousClassName, animationClass }
      )

      expect(fixture.getClassName()).toBe(previousClassName)
      fixture.scrollDown(true)
      expect(fixture.getClassName()).not.toBeNull()
      expect(fixture.getClassNames()).toContain(previousClassName)
    })
  })

  describe('Non-directional', () => {
    const animationClass = 'flip'
    const offset = 100

    test('should add animation classes', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
    })

    test('should add animation classes by offset', () => {
      const fixture = createFixture(scrollAnimate, { animationClass, offset })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
    })

    test('should toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass)
    })

    test('should toggle animation when repeat is on by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass)
    })

    test('should not toggle animation when repeat is off', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass)
    })

    test('should not toggle animation when repeat is off by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass)
    })
  })

  describe('In animation', () => {
    const animationClass = { in: 'flip' }
    const offset = 100

    test('should add animation classes', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should add animation classes by offset', () => {
      const fixture = createFixture(scrollAnimate, { animationClass, offset })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should toggle animation when repeat is on by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should not toggle animation when repeat is off', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should not toggle animation when repeat is off by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })
  })

  describe('Out animation', () => {
    const animationClass = { out: 'flipOut' }

    test('should print wrong parameter usage warning', () => {
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      const fixture = createFixture(scrollAnimate, { animationClass })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining("animate-on-scroll"),
        expect.stringContaining("'out' parameter can't be used alone. 'in' required"),
      )
      expect(fixture.getClassName()).toBeFalsy()
    })
  })

  describe('InOut animation', () => {
    const animationClass = { in: 'flip', out: 'flipOut' }
    const offset = 100

    test('should add animation classes', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should add animation classes by offset', () => {
      const fixture = createFixture(scrollAnimate, { animationClass, offset })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.out)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should toggle animation when repeat is on by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.out)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should not toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })

    test('should not toggle animation when repeat is off by offset', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: false, offset }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.in)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.in)
    })
  })

  describe('Downwards animation', () => {
    const animationClass = { down: 'rotate' }

    test('should apply animation on scroll once', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.down)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.down)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.down)
      fixture.scrollUp(false)
      expect(fixture.getClassName()).toEqual(animationClass.down)
    })

    test('should toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.down)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.down)
      fixture.scrollUp(true)
      fixture.scrollUp(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.down)
    })
  })

  describe('Upwards animation', () => {
    const animationClass = { up: 'jackInTheBox' }

    test('should apply animation on scroll once', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toEqual(animationClass.up)
      fixture.scrollUp(false)
      expect(fixture.getClassName()).toEqual(animationClass.up)
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toEqual(animationClass.up)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toEqual(animationClass.up)
    })

    test('should toggle animation when repeat is on', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollUp(false)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBeFalsy()
    })
  })

  describe('Bi-directional animation', () => {
    const animationClass = { up: 'zoomIn', down: 'zoomOut' }

    test('should toggle appropriate direction', () => {
      const fixture = createFixture(scrollAnimate, { animationClass })

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBe(animationClass.down)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBe(animationClass.down)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollUp(false)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBe(animationClass.down)
      fixture.scrollDown(false)
      expect(fixture.getClassName()).toBe(animationClass.down)
    })

    test('should toggle appropriate animation regardless of repeat', () => {
      const fixture = createFixture(
        scrollAnimate, { animationClass, repeat: true }
      )

      expect(fixture.getClassName()).toBeFalsy()
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBe(animationClass.down)
      fixture.scrollDown(false)
      fixture.scrollUp(true)
      expect(fixture.getClassName()).toBe(animationClass.up)
      fixture.scrollUp(false)
      fixture.scrollDown(true)
      expect(fixture.getClassName()).toBe(animationClass.down)
    })
  })
})
