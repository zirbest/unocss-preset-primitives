import { describe, expect, test } from 'vitest'
import { createGenerator, escapeSelector as e } from '@unocss/core'
import presetPrimitives, { presetHeadlessUi, presetKobalte, presetRadixUi } from '../src/index'

describe('unocss-preset-primitives', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetPrimitives({ prefix: 'ui', variants: 'open|disable', selector: 'data-headlessui-state' })],
  })

  test('should generate css for an exposed state', async () => {
    const { css } = await uno
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.${e('ui-open:foo')}[data-headlessui-state~='open']{name:bar;}`)
  })
})

describe('unocss-preset-headlessui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetHeadlessUi({ prefix: 'ui' })],
  })

  test('should generate css for an exposed state', async () => {
    const { css } = await uno
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.${e('ui-open:foo')}[data-headlessui-state~='open']{name:bar;}`)
  })
})

describe('unocss-preset-radixui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetRadixUi({ prefix: 'ui' })],
  })

  test('should generate css for an exposed state', async () => {
    const { css } = await uno
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.${e('ui-open:foo')}[data-state~='open']{name:bar;}`)
  })
})

describe('unocss-preset-kobalte', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetKobalte({ prefix: 'ui' })],
  })

  test('should generate css for an exposed state', async () => {
    const { css } = await uno
      .generate('<div class="ui-selected:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.${e('ui-selected:foo')}[data-selected]{name:bar;}`)
  })
})
