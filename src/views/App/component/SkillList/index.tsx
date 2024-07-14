import React from 'react'
import type { Resume } from '@/typings/configType'
import ResumnCard from '@/components/ResumnCard'

export default (props: Resume): React.ReactElement => {
  const { skillList } = props
  const resumnProps = {
    title: '个人技能',
  }
  return (
    <ResumnCard {...resumnProps}>
      {skillList?.map((v, i) => (
        <div key={i} className="mb6">
          <span className="font-14 cb1">{i + 1}.</span>
          <span className="font-14 cb1">{v.skill_name}，</span>
          <span className="font-14 cb1">{v.skill_desc}</span>
        </div>
      ))}
    </ResumnCard>
  )
}
