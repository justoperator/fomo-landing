import type { Common, PageData } from './types'

function resolveApiUrl(value: string | undefined): string {
  const configured = value?.trim()

  if (!configured) return '/api'
  if (configured.startsWith('/')) return configured.replace(/\/+$/, '') || '/api'

  try {
    const url = new URL(configured)
    const pathname = url.pathname.replace(/\/+$/, '')
    if (!pathname) url.pathname = '/api'
    else url.pathname = pathname
    return url.toString().replace(/\/+$/, '')
  } catch (error) {
    throw new Error(`Invalid VITE_API_URL: ${configured}`, { cause: error })
  }
}

const apiUrl = resolveApiUrl(import.meta.env.VITE_API_URL as string | undefined)

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`)

  if (!response.ok) {
    throw new Error(`API request failed (${response.status}): ${path}`)
  }

  return response.json() as Promise<T>
}

export function getCommon(): Promise<Common> {
  return request<Common>('/common')
}

export function getPage(pathname: string): Promise<PageData> {
  return request<PageData>(`/page?path=${encodeURIComponent(pathname)}`)
}
