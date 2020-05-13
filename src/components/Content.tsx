import * as React from 'react'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

interface ContentType {
  content: JSX.Element
  className: string
}

const Content = ({ content, className }: ContentType) => (
  <div className={className}>{content}</div>
)

export default Content
