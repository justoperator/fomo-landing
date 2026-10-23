import type { GlobalConfig, Field } from 'payload'

const links: Field = {
  name: 'links',
  type: 'array',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'href', type: 'text', required: true },
  ],
}

export const Header: GlobalConfig = {
  slug: 'header',
  access: { read: () => true },
  fields: [
    { name: 'logo', type: 'text', defaultValue: 'FOMO Vision' },
    links,
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'text' },
  ],
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: { read: () => true },
  fields: [{ name: 'text', type: 'text' }, links],
}
