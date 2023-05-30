import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteConfig',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  fieldsets: [{name: 'footer', title: 'Footer'}],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'},
    }),
    defineField({
      title: 'Site language',
      name: 'lang',
      type: 'string',
    }),
    defineField({
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'route'}],
        }),
      ],
    }),
    defineField({
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: (Rule) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'route'}],
        }),
      ],
    }),
    defineField({
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    }),
  ],
})
