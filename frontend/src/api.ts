import type { Common, PageData } from './types'

const apiUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '/api'

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
