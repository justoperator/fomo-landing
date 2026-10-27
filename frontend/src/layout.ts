import type { Common } from './types'
import { esc } from './utils'

export const renderHeader = (h: Common['header']) => `
<header class="head"><div class="wrap head-in">
  <a class="brand" href="/"><i></i><span>${esc(h.logo)}</span></a>
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">
    <span class="sr-only">Toggle navigation</span>
    <i></i><i></i><i></i>
  </button>
  <nav id="main-navigation" aria-label="Main navigation">
    ${h.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('')}
    <a class="btn primary mobile-menu-cta" href="${esc(h.buttonLink)}">${esc(h.buttonText)}</a>
  </nav>
  <a class="btn primary head-cta" href="${esc(h.buttonLink)}">${esc(h.buttonText)}</a>
</div></header>`

export const renderFooter = (f: Common['footer']) => `
<footer class="foot"><div class="wrap foot-in">
  <span>${esc(f.text)}</span>
  ${f.links.length ? `<nav aria-label="Footer navigation">${f.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('')}</nav>` : ''}
</div></footer>`
