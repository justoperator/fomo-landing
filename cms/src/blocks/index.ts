import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'text' },
    { name: 'secondaryText', type: 'text' },
    { name: 'secondaryLink', type: 'text' },
  ],
}

export const Features: Block = {
  slug: 'features',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'icon', type: 'select', options: ['model', 'unique', 'number', 'team', 'cpu', 'phone'], defaultValue: 'model' },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}

export const Steps: Block = {
  slug: 'steps',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}

export const Cta: Block = {
  slug: 'cta',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'text', type: 'textarea' },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'text' },
  ],
}
