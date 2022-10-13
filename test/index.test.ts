import { describe, expect, test } from 'vitest'
import { createGenerator, escapeSelector as e } from 'unocss'
import presetPrimitives from '../src/index'

describe('unocss-preset-primitives', () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'bar' }]],
    presets: [presetPrimitives({ prefix: 'ui', states: 'open|disable', selector: 'data-headlessui-state' })],
  })

  test('should generate css for an exposed state', async () => {
    const { css } = await uno
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.${e('ui-open:foo')}[data-headlessui-state~='open']{name:bar;}`)
  })
})
