// Update variables below as necessary
const optimizeOnlyInProduction = true
const isProduction = process.env.VERCEL_ENV === 'production'
const origin = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null

export default function loader({ src, width, quality }) {
  if (optimizeOnlyInProduction && !isProduction) {
    return src
  }
  if (src.startsWith('http')) {
    return optimizedSrc(src, width, quality)
  } 
  if (origin) {
    return optimizedSrc(`${origin}${src}`, width, quality)
  } 

  // Do not optimize relative URLs
  return src
}

function optimizedSrc(src, width, quality) {
  const params = [`width=${width}`, `quality=${quality || 75}`]
  return `https://img.quickr.dev/${params.join(",")}/${src}`
}