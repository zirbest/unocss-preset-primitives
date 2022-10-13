/* eslint-disable @typescript-eslint/quotes */
import { describe, expect, test } from 'vitest'
import { createGenerator } from 'unocss'
import presetStates from '../src/index'

describe('unocss-preset-states', () => {
  test('should generate css for an exposed state', async () => {
    const uno = createGenerator({
      rules: [['foo', { name: 'bar' }]],
      presets: [presetStates()],
    })

    const { css } = await uno
      .generate('<div class="ui-open:foo"></div>', { preflights: false, minify: true })
    expect(css).toMatch(`.ui-open\\:foo[data-headlessui-state~='open']{name:bar;}`)
  })
})
