import {defineField, defineType} from 'sanity'
import supportedLanguages from './supportedLanguages'

export default defineType({
  name: 'localeText',
  type: 'object',
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
      type: 'text',
      fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
})
