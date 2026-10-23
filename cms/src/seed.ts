import type { Payload } from 'payload'

const studioUrl = process.env.STUDIO_URL || 'https://studio.fomo.vision'

const header = {
  logo: 'FOMO Vision',
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#steps' },
  ],
  buttonText: 'Open Studio',
  buttonLink: studioUrl,
}

const footer = {
  text: '© 2026 FOMO Vision.',
  links: [],
}

const blocks = [
  {
    blockType: 'hero' as const,
    title: 'Run and test FOMO models right in your browser',
    subtitle:
      'FOMO Studio: upload a .tflite model, point a camera and see detections live, together with your team.',
    buttonText: 'Open Studio',
    buttonLink: studioUrl,
    secondaryText: 'See features',
    secondaryLink: '#features',
  },
  {
    blockType: 'features' as const,
    title: 'Everything for working with FOMO',
    items: [
      { icon: 'model' as const, title: 'Online model launch', text: 'Upload float32 or int8 .tflite and start in seconds.' },
      { icon: 'unique' as const, title: 'Unique objects', text: 'Neighbouring cells merge into one object.' },
      { icon: 'number' as const, title: 'Numbering', text: 'Stable #1, #2… across frames.' },
      { icon: 'team' as const, title: 'Teamwork', text: 'Invite members with separate permissions.' },
      { icon: 'cpu' as const, title: 'Resource limits', text: 'Control RAM, CPU, cores and frame timeout.' },
      { icon: 'phone' as const, title: 'Phone as camera', text: 'Connect a phone by QR code.' },
    ],
  },
  {
    blockType: 'steps' as const,
    title: 'How it works',
    items: [
      { title: 'Create a project', text: 'Start a workspace for your model and your team.' },
      { title: 'Upload a model', text: 'Add a float32 or int8 .tflite file.' },
      { title: 'Choose a video source', text: 'Use your camera, a phone or a video file.' },
      { title: 'Invite the team', text: 'Share the project with the right permissions.' },
    ],
  },
  {
    blockType: 'cta' as const,
    title: 'Ready to try FOMO Studio?',
    text: 'Launch a model in your browser and see what it can find in the real world.',
    buttonText: 'Open Studio',
    buttonLink: studioUrl,
  },
]

export async function seed(payload: Payload) {
  const existingPages = await payload.find({
    collection: 'pages',
    where: { path: { equals: '/' } },
    limit: 1,
  })

  if (existingPages.totalDocs === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'FOMO Vision — run FOMO models online',
        path: '/',
        seoDescription: 'FOMO Studio lets you run and test FOMO models live in your browser.',
        blocks,
      },
    })
  }

  const currentHeader = await payload.findGlobal({ slug: 'header' })
  if (!currentHeader.links?.length) {
    await payload.updateGlobal({ slug: 'header', data: header })
  }

  const currentFooter = await payload.findGlobal({ slug: 'footer' })
  if (!currentFooter.text) {
    await payload.updateGlobal({ slug: 'footer', data: footer })
  }
}
