import React from 'react'
import ResumnCard from '@/components/ResumnCard'
import type { Resume } from '@/typings/configType'

export default function (props: Resume) {
  const ResumnProps = {
    title: '自我介绍',
  }
  return (
    <ResumnCard {...ResumnProps}>
      <div style={{ lineHeight: 1.8 }}>{props.aboutme?.aboutme_desc}</div>
    </ResumnCard>
  )
}
