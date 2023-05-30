import React from 'react'
import {ReactNode} from 'react'

import {defineField, defineType} from 'sanity'

type LinkProps = {
  children: ReactNode
}

const LinkRender = ({children}: LinkProps) => <span>{children} 🌍</span>

export default defineType({
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),
  ],

  // icon: () => '🌍',
  // render: LinkRender,
})
