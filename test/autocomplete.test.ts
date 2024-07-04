import { createAutocomplete } from '@unocss/autocomplete'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetKobalte, presetRadixUi } from '../src/index'

describe('unocss-preset-kobalte', async () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetKobalte()],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check against impl', async () => {
    expect(await ac.suggest('uicl'))
      .include('ui-closed:')

    expect(await ac.suggest('uincl'))
      .include('ui-not-closed:')
  })
})

describe('unocss-preset-radixui', async () => {
  const uno = createGenerator({
    rules: [['foo', { name: 'foo' }], ['bar', { name: 'bar' }]],
    presets: [presetRadixUi()],
  })

  const ac = createAutocomplete(uno, {
    matchType: 'fuzzy',
  })

  it('check against impl', async () => {
    expect(await ac.suggest('uicl'))
      .include('ui-closed:')

    expect(await ac.suggest('uincl'))
      .include('ui-not-closed:')
  })
})
