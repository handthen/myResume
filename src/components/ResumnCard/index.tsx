import React from 'react'
import Tag from '@/components/Tag'

interface Props {
  children: React.ReactNode
  title: string
  tb?: boolean
}

export default function (props: Props) {
  const { children, title, tb } = props
  return (
    <div className={`resume-card ${tb ? '' : 'clear-border-top'}`}>
      <Tag>{title}</Tag>
      <div className="pl20 pr20 pb8">{children}</div>
    </div>
  )
}
