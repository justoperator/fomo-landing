import type { Block } from './types'
import { hero } from './blocks/hero'
import { features } from './blocks/features'
import { steps } from './blocks/steps'
import { cta } from './blocks/cta'

const templates: Record<string, (b: any) => string> = { hero, features, steps, cta }

export function renderBlocks(blocks: Block[]) {
  return blocks
    .map((b) => {
      const tpl = templates[b.type]
      if (!tpl) console.warn('Unknown block type:', b.type)
      return tpl ? tpl(b) : ''
    })
    .join('')
}
