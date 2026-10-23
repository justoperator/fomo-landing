import './style.css'
import { getCommon, getPage } from './api'
import { renderHeader, renderFooter } from './layout'
import { renderBlocks } from './renderBlocks'

const app = document.querySelector<HTMLDivElement>('#app')!

async function init() {
  try {
    const [common, page] = await Promise.all([getCommon(), getPage(location.pathname)])
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.seoDescription ?? '')
    app.innerHTML = renderHeader(common.header) + `<main>${renderBlocks(page.blocks ?? [])}</main>` + renderFooter(common.footer)
  } catch (e) {
    console.error(e)
    app.innerHTML = '<p class="error">Щось пішло не так. Спробуйте оновити сторінку.</p>'
  }
}

init()
