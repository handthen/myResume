import React from 'react'
import ResumnCard from '@/components/ResumnCard'
import type { Resume } from '@/typings/configType'

export default function (props: Resume) {
  const { workList } = props
  const resumnProps = {
    title: '个人作品',
  }
  return (
    <ResumnCard {...resumnProps}>
      <div>
        <div>
          <span className="font-14 mr8 fw700">作品名称</span>
          <a className="font-12" href={'h'} target="_blank" rel="noreferrer"></a>
        </div>
        <div className="t-line font-14"></div>
      </div>
    </ResumnCard>
  )
}
