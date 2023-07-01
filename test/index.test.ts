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
    expect(css).toMatchInlineSnapshot('".ui-open\\\\:foo[data-headlessui-state~=\'open\'],:where([data-headlessui-state~=\'open\']) .ui-open\\\\:foo{name:bar;}"')
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
    expect(css).toMatchInlineSnapshot('".ui-open\\\\:foo[data-headlessui-state~=\'open\'],:where([data-headlessui-state~=\'open\']) .ui-open\\\\:foo{name:bar;}"')
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
    expect(css).toMatchInlineSnapshot('".ui-open\\\\:foo[data-state~=\'open\'],:where([data-state~=\'open\']) .ui-open\\\\:foo{name:bar;}"')
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
    expect(css).toMatchInlineSnapshot('".ui-selected\\\\:foo[data-selected],:where([data-selected]) .ui-selected\\\\:foo{name:bar;}"')
  })
})
