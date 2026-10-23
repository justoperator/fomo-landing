import type { Endpoint } from 'payload'

export const commonEndpoint: Endpoint = {
  path: '/common',
  method: 'get',
  handler: async (req) => {
    const header = await req.payload.findGlobal({ slug: 'header', depth: 0 })
    const footer = await req.payload.findGlobal({ slug: 'footer', depth: 0 })
    const clean = (arr: { label: string; href: string }[] | null | undefined = []) =>
      (arr ?? []).map(({ label, href }) => ({ label, href }))
    return Response.json({
      header: { logo: header.logo, links: clean(header.links), buttonText: header.buttonText, buttonLink: header.buttonLink },
      footer: { text: footer.text, links: clean(footer.links) },
    })
  },
}

export const pageEndpoint: Endpoint = {
  path: '/page',
  method: 'get',
  handler: async (req) => {
    const path = (req.query?.path as string) || '/'
    const res = await req.payload.find({
      collection: 'pages',
      where: { path: { equals: path } },
      limit: 1,
      depth: 0,
    })
    const page = res.docs[0]
    if (!page) return Response.json({ error: 'Not found' }, { status: 404 })
    // blockType -> type, прибираємо службові поля
    const blocks = (page.blocks || []).map(({ blockType, id, blockName, ...rest }: any) => ({ type: blockType, ...rest }))
    return Response.json({ title: page.title, seoDescription: page.seoDescription, blocks })
  },
}
