import type { Preset } from 'unocss'

/**
 * @public
 */
export interface StatesOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
  /**
   * @default 'open|checked|selected|active|disabled'
   */
  states?: string
  /**
   * @default 'data-headlessui-state'
   */
  selector?: string
}

const presetPrimitives = (options: StatesOptions = {}): Preset => {
  const {
    prefix = 'ui',
    states = 'open|checked|selected|active|disabled',
    selector = 'data-headlessui-state',
  } = options

  return {
    name: 'unocss-preset-primitives',
    variants: [
      (matcher: string) => {
        const regex = new RegExp(`^${prefix}(-not)?-(${states})[:-]`)
        const match = matcher.match(regex)
        if (match) {
          return {
            matcher: matcher.slice(match[0].length),
            selector: (s: any) => (match[1] === '-not')
              ? `${s}[${selector}]:not([${selector}~='${match[2]}'])`
              : `${s}[${selector}~='${match[2]}']`,
          }
        }
        else {
          return matcher
        }
      },
    ],
  }
}

/**
 * @public
 */
export interface HeadlessUiOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
}

const presetHeadlessUi = (options: HeadlessUiOptions = {}): Preset => {
  const {
    prefix = 'ui',
  } = options
  return presetPrimitives({ prefix })
}

/**
 * @public
 */
export interface RadixUiOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
}

const presetRadixUi = (options: RadixUiOptions = {}): Preset => {
  const {
    prefix = 'ui',
  } = options
  return presetPrimitives({ prefix, selector: 'data-state' })
}

export { presetHeadlessUi, presetRadixUi }
export default presetPrimitives
