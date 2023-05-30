import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'text',
      type: 'portableText',
      title: 'Text',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      }
    },
  },
})
