import { esc } from '../utils'
import { icon } from '../icons'

export const features = (b: any) => `
<section class="sec" id="features"><div class="wrap">
  <p class="section-kicker">Built for iteration</p>
  <h2>${esc(b.title)}</h2>
  <div class="cards">${(b.items ?? [])
    .map((i: any) => `<article class="card">${icon(i.icon)}<h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`)
    .join('')}</div>
</div></section>`
