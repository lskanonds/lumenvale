import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  /*
    The owner enquiry form accepts attachments, and a server action body is capped at 1 MB
    by default. 4 MB because Vercel rejects request bodies over 4.5 MB on every plan; the
    form itself stops at 3.5 MB (src/lib/attachments.ts), so an oversized upload gets a
    readable message under the field instead of a platform error.
  */
  experimental: {
    serverActions: { bodySizeLimit: '4mb' },
  },
  images: {
    // Local disk in development, Vercel Blob when deployed. The Media collection hands
    // next/image whichever URL the active storage adapter produced.
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
