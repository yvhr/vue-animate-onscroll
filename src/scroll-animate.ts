export interface AnimationParams {
  in?: string
  out?: string
  up?: string
  down?: string
}

export interface RunOptions {
  useParent: boolean
  offset: number
  isUpwards: boolean
  previousClassName: string
}

export interface BindingLike {
  value: string | AnimationParams
  modifiers: { repeat?: boolean }
}

export interface ScrollAnimateInstance {
  isInView: (rect: DOMRect, offset: number) => boolean
  run: (el: HTMLElement, binding: BindingLike, options: RunOptions) => void
}

const getClientHeight = (): number => document.documentElement.clientHeight

const isInScrollView = ({ top, bottom }: DOMRect, offset: number): boolean =>
  (top + offset) < getClientHeight() && (bottom - offset) > 0

const isDirectionAgnostic = (params: AnimationParams): boolean =>
  !(params.down || params.up)

const isOutAnimationOnly = (params: AnimationParams): boolean =>
  !params.in && !!params.out

const isBiDirectional = (params: AnimationParams): boolean =>
  !!params.down && !!params.up

const hasBeenApplied = (current = '', prev = ''): boolean =>
  current.trim() !== prev.trim()

const shouldResetAnimation = ({ params, isUpwards, repeat }: {
  params: AnimationParams
  isUpwards: boolean
  repeat?: boolean
}): boolean =>
  !!repeat && ((isUpwards && !!params.down) || (!isUpwards && !!params.up))

const applyAnimationClass = (el: HTMLElement, current: string, newClass = ''): void => {
  el.className = `${current} ${newClass}`.trim()
}

export default function ScrollAnimate(): ScrollAnimateInstance {
  return {
    isInView: isInScrollView,
    run(el: HTMLElement, { value: params, modifiers }: BindingLike, { useParent, offset, isUpwards, previousClassName = '' }: RunOptions): void {
      const animParams = params as AnimationParams

      if (isOutAnimationOnly(animParams)) {
        console.warn("animate-on-scroll", "'out' parameter can't be used alone. 'in' required")
        return
      }

      let rect: DOMRect
      if (useParent) {
        rect = (el.parentNode as HTMLElement).getBoundingClientRect()
      } else {
        rect = el.getBoundingClientRect()
      }

      if (!this.isInView(rect, offset)) {
        const animationClass = animParams.out || ''
        if (modifiers.repeat && (isDirectionAgnostic(animParams) || animationClass)) {
          applyAnimationClass(el, previousClassName, animationClass)
          return
        }
        return
      }

      if (isDirectionAgnostic(animParams)) {
        const animationClass = animParams.in || (params as string)
        applyAnimationClass(el, previousClassName, animationClass)
        return
      }

      if (modifiers.repeat ||
          isBiDirectional(animParams) ||
          !hasBeenApplied(el.className, previousClassName)) {
        const animationClass = isUpwards ? animParams.up : animParams.down
        applyAnimationClass(el, previousClassName, animationClass)
        return
      }

      if (shouldResetAnimation({ params: animParams, isUpwards, ...modifiers })) {
        applyAnimationClass(el, previousClassName)
        return
      }
    }
  }
}
