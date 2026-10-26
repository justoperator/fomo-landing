import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header, Footer } from './globals'
import { commonEndpoint, pageEndpoint } from './endpoints'
import { seed } from './seed'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const corsOrigins = [
  process.env.FRONTEND_URL,
  ...(process.env.FRONTEND_URLS?.split(',') ?? []),
]
  .filter((origin): origin is string => Boolean(origin))
  .map((origin) => origin.trim().replace(/\/+$/, ''))
const csrfOrigins = [
  ...corsOrigins,
  process.env.CMS_URL,
]
  .filter((origin): origin is string => Boolean(origin))
  .map((origin) => origin.trim().replace(/\/+$/, ''))

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  globals: [Header, Footer],
  endpoints: [commonEndpoint, pageEndpoint],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  cors: [...new Set(corsOrigins)],
  csrf: [...new Set(csrfOrigins)],
  sharp,
  plugins: [],
  onInit: async (payload) => {
    await seed(payload)
  },
})
