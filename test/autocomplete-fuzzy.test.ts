import type { UnocssAutocomplete } from '@unocss/autocomplete'
import { createAutocomplete } from '@unocss/autocomplete'
import type { UnoGenerator } from '@unocss/core'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetPrimitives, { presetHeadlessUi, presetKobalte, presetRadixUi } from '../src/index'

// test against the implementation
async function compare_impl(ac: UnocssAutocomplete, uno: UnoGenerator, prefix: string, rules: string[]) {
  const prefix_suggestions = await ac.suggest(prefix)
  for (const prefix of prefix_suggestions) {
    // check prefixes
    for (const rule of rules) {
      const { css } = await uno.generate(`<div class="${prefix}${rule}"></div>`, { preflights: false, minify: true })
      expect(css).length.above(0)
    }

    // check suggestions with prefix
    // generates some weird suggestions that interfere with testing
    /* console.log(await ac.suggest(prefix))
    for (const suggestion of await ac.suggest(prefix)) {
      const { css } = await uno.generate(`<div class="${suggestion}"></div>`, { preflights: false, minify: true })
      expect(css).length.above(0)
    } */
  }

  // check for completeness
  // - difficult to do
  // - might not be needed because autocomplete is generated from data used by implementation
}

async function check_variants(ac: UnocssAutocomplete, variants: string[], rules: string[]) {
  for (const variant of variants) {
    const suggestions = await ac.suggest(variant)
    for (const rule of rules)
      expect((suggestions).includes(variant + rule)).toBe(true)
  }
}

describe('unocss-preset-primitives', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetPrimitives({ prefix: 'ui', variants: 'open|disable', selector: 'data-headlessui-state' })],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check variants', async () => {
    const variants = [
      'ui-open:',
      'ui-disable:',
      'ui-not-open:',
      'ui-not-disable:',
    ]

    {
      const suggestions = await ac.suggest('ui')
      expect(suggestions).toEqual(variants)
    }

    check_variants(ac, variants, ['foo', 'bar'])
  })

  it('check against impl', async () => {
    await compare_impl(ac, uno, 'ui', ['foo', 'bar'])
  })
})

describe('unocss-preset-headlessui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetHeadlessUi({ prefix: 'ui' })],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check against impl', async () => {
    await compare_impl(ac, uno, 'ui', ['foo', 'bar'])
  })

  it('check unique variants', async () => {
    check_variants(ac, ['ui-focus-visible:', 'ui-not-focus-visible:'], ['foo', 'bar'])

    const suggestions = await ac.suggest('ui')
    expect((suggestions).includes('ui-focus-visible:')).toBe(true)
    expect((suggestions).includes('ui-not-focus-visible:')).toBe(true)
  })
})

describe('unocss-preset-radixui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetRadixUi({ prefix: 'ui' })],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check against impl', async () => {
    await compare_impl(ac, uno, 'ui', ['foo', 'bar'])
  })
})

describe('unocss-preset-kobalte', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetKobalte({ prefix: 'ui' })],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check against impl', async () => {
    await compare_impl(ac, uno, 'ui', ['foo', 'bar'])
  })
})
