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
    initMobileNavigation()
  } catch (e) {
    console.error(e)
    app.innerHTML = '<p class="error">Щось пішло не так. Спробуйте оновити сторінку.</p>'
  }
}

function initMobileNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const navigation = document.querySelector<HTMLElement>('#main-navigation')
  if (!toggle || !navigation) return

  const setMenuOpen = (isOpen: boolean) => {
    toggle.setAttribute('aria-expanded', String(isOpen))
    navigation.classList.toggle('is-open', isOpen)
    document.body.classList.toggle('menu-open', isOpen)
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true')
  })

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) setMenuOpen(false)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false)
      toggle.focus()
    }
  })
}

init()
