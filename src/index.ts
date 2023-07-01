import type { Preset } from '@unocss/core'

/**
 * @public
 */
export interface PrimitivesOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
  /**
   * @default 'open|checked|selected|active|disabled'
   */
  variants?: string
  /**
   * @default 'data-headlessui-state'
   */
  selector?: string
  /**
   * @default 'false'
   * use [data~='checked'] or [data-checked]
   */
  isAttrBoolean?: boolean
}

function presetPrimitives(options: PrimitivesOptions = {}): Preset {
  const {
    prefix = 'ui',
    variants = 'open|checked|selected|active|disabled',
    selector = 'data-headlessui-state',
    isAttrBoolean = false,
  } = options

  return {
    name: 'unocss-preset-primitives',
    variants: [
      (matcher: string) => {
        const regex = new RegExp(`^${prefix}(-not)?-(${variants})[:-]`)
        const match = matcher.match(regex)
        if (match) {
          const attrGen = !isAttrBoolean
            ? `[${selector}~='${match[2]}']`
            : `[${selector}-${match[2]}]`
          return {
            matcher: matcher.slice(match[0].length),
            selector: (s: any) => (match[1] === '-not')
              ? `${s}[${selector}]:not(${attrGen}),:where([${selector}]:not(${attrGen})) ${s}:not(${selector})`
              : `${s}${attrGen},:where(${attrGen}) ${s}`,
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

function presetHeadlessUi(options: HeadlessUiOptions = {}): Preset {
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

function presetRadixUi(options: RadixUiOptions = {}): Preset {
  const {
    prefix = 'ui',
  } = options
  const variants = 'active|checked|closed|delayed-open|hidden|inactive|indeterminate|instant-open|off|on|open|unchecked|visible'
  return presetPrimitives({ prefix, variants, selector: 'data-state' })
}

/**
 * @public
 */
export interface KobalteOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
}

function presetKobalte(options: KobalteOptions = {}): Preset {
  const {
    prefix = 'ui',
  } = options
  const variants = 'valid|invalid|required|disabled|readonly|checked|indeterminate|selected|pressed|expanded|opened|closed|highlighted|current'
  return presetPrimitives({ prefix, variants, selector: 'data', isAttrBoolean: true })
}

export { presetHeadlessUi, presetRadixUi, presetKobalte }
export default presetPrimitives
