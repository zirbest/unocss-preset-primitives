import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import presetPrimitives, { presetHeadlessUi, presetKobalte, presetRadixUi } from '../src/index'

describe('unocss-preset-primitives', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetPrimitives({ prefix: 'ui', variants: 'open|disable', selector: 'data-headlessui-state' })],
  })

  it('should generate css for an exposed state', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`".ui-open\\:foo[data-headlessui-state~='open'],:where([data-headlessui-state~='open']) .ui-open\\:foo{name:bar;}"`)
  })
})

describe('unocss-preset-headlessui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetHeadlessUi({ prefix: 'ui' })],
  })

  it('should generate css for an exposed state', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`".ui-open\\:foo[data-headlessui-state~='open'],:where([data-headlessui-state~='open']) .ui-open\\:foo{name:bar;}"`)
  })

  it('should generate css for focus-visible', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-focus-visible:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`":where([data-headlessui-focus-visible]) .ui-focus-visible\\:foo:focus{name:bar;}"`)
  })

  it('should generate css for focus-not-visible', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-not-focus-visible:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`".ui-not-focus-visible\\:foo:focus:where(:not([data-headlessui-focus-visible] .ui-not-focus-visible\\:foo)){name:bar;}"`)
  })
})

describe('unocss-preset-radixui', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetRadixUi({ prefix: 'ui' })],
  })

  it('should generate css for an exposed state', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`".ui-open\\:foo[data-state~='open'],:where([data-state~='open']) .ui-open\\:foo{name:bar;}"`)
  })
})

describe('unocss-preset-kobalte', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetKobalte({ prefix: 'ui' })],
  })

  it('should generate css for an exposed state', async () => {
    const { css } = await (await uno)
      .generate('<div class="ui-selected:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatchInlineSnapshot(`".ui-selected\\:foo[data-selected],:where([data-selected]) .ui-selected\\:foo{name:bar;}"`)
  })
})
