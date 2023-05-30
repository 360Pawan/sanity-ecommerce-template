import {defineField, defineType} from 'sanity'
import supportedLanguages from './supportedLanguages'

export default defineType({
  name: 'localeBlockContent',
  type: 'object',
  title: 'localeBlockContent',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'blockContent',
      fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
})
