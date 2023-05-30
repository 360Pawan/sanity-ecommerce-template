// Document types
import product from './documents/product'
import productVariant from './documents/productVariant'
import vendor from './documents/vendor'
import category from './documents/category'
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

const documents = [product, productVariant, vendor, category, page, route, siteConfig]

// Object types
import blockContent from './objects/blockContent'
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import textSection from './objects/textSection'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import contactInfo from './objects/contactInfo'
import cta from './objects/cta'

const objects = [
  blockContent,
  hero,
  imageSection,
  simplePortableText,
  textSection,
  cta,
  figure,
  portableText,
  link,
  internalLink,
  contactInfo,
]

// Locale
import localeString from './locale/String'
import localeBlockContent from './locale/BlockContent'

const locales = [localeString, localeBlockContent]

export const schemaTypes = [...documents, ...locales, ...objects]
