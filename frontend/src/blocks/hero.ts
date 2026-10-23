import { esc } from '../utils'

const hits = [7, 15, 22, 34, 41, 52]
const cells = Array.from({ length: 60 }, (_, i) => {
  const cls = [hits.includes(i) && 'hit', i === 22 && 'ping'].filter(Boolean).join(' ')
  return `<span class="${cls}"></span>`
}).join('')

export const hero = (b: any) => `
<section class="hero" id="hero"><div class="wrap hero-in">
  <div>
    <h1>${esc(b.title)}</h1>
    <p>${esc(b.subtitle)}</p>
    <div class="row">
      <a class="btn primary" href="${esc(b.buttonLink)}">${esc(b.buttonText)}</a>
      ${b.secondaryText ? `<a class="btn light" href="${esc(b.secondaryLink)}">${esc(b.secondaryText)}</a>` : ''}
    </div>
  </div>
  <div class="fomo-grid">${cells}</div>
</div></section>`
