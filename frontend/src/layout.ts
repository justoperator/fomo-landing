import type { Common } from './types'
import { esc } from './utils'

export const renderHeader = (h: Common['header']) => `
<header class="head"><div class="wrap head-in">
  <a class="brand" href="/"><i></i>${esc(h.logo)}</a>
  <nav>${h.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('')}</nav>
  <a class="btn primary" href="${esc(h.buttonLink)}">${esc(h.buttonText)}</a>
</div></header>`

export const renderFooter = (f: Common['footer']) => `
<footer class="foot"><div class="wrap foot-in">
  <span>${esc(f.text)}</span>
  <nav>${f.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('')}</nav>
</div></footer>`
