import React from 'react'
import {ReactNode} from 'react'
import {defineField} from 'sanity'

type InternalLinkProps = {
  children: ReactNode
}

const InternalLinkRender = ({children}: InternalLinkProps) => <span>{children} 🔗</span>

export default defineField({
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [{type: 'product'}, {type: 'route'}],
  // icon: () => '🔗',
  // render: InternalLinkRender,
})
