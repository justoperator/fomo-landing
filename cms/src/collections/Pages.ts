import type { CollectionConfig } from 'payload'
import { Hero, Features, Steps, Cta } from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'path', type: 'text', required: true, unique: true, defaultValue: '/' },
    { name: 'seoDescription', type: 'textarea' },
    { name: 'blocks', type: 'blocks', blocks: [Hero, Features, Steps, Cta] },
  ],
}
