import createMDX from '@next/mdx'

const nextConfig: import('next').NextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    // Add Markdown plugins here, as desired
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)