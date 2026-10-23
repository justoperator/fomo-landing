import { esc } from '../utils'

export const cta = (b: any) => `
<section class="cta" id="cta"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <p>${esc(b.text)}</p>
  <a class="btn primary" href="${esc(b.buttonLink)}">${esc(b.buttonText)}</a>
</div></section>`
