import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      }
    },
  },
})
