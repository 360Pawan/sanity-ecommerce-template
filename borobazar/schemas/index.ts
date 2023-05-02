// Document types
import product from './documents/product'
import productVariant from './documents/productVariant'
import vendor from './documents/vendor'
import category from './documents/category'

const documents = [product, productVariant, vendor, category]

// Object types
import blockContent from './objects/blockContent'

const objects = [blockContent]

// Locale
import localeString from './locale/String'
import localeBlockContent from './locale/BlockContent'

const locales = [localeString, localeBlockContent]

export const schemaTypes = [...documents, ...locales, ...objects]
