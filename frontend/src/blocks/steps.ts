import { esc } from '../utils'

export const steps = (b: any) => `
<section class="sec alt" id="steps"><div class="wrap">
  <p class="section-kicker">From model to insight</p>
  <h2>${esc(b.title)}</h2>
  <ol class="steps">${(b.items ?? [])
    .map((i: any) => `<li><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></li>`)
    .join('')}</ol>
</div></section>`
