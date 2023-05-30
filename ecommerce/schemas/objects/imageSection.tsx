import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
    }),
    defineField({
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    }),
    defineField({
      name: 'image',
      type: 'figure',
      title: 'Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({heading, media}) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      }
    },
  },
})
