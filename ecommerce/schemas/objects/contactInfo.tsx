import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  type: 'object',
  title: 'Contact information',
  fields: [
    defineField({
      name: 'linkedIn',
      type: 'string',
      title: 'LinkedIn',
    }),
    defineField({
      name: 'twitter',
      type: 'string',
      title: 'Twitter',
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
    }),
  ],
})
