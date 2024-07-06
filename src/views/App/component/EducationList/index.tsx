import React from 'react'
import type { Resume } from '@/typings/configType'
import ResumnCard from '@/components/ResumnCard'
import { getType } from '@/utils'

export default (props: Resume): React.ReactElement => {
  const { educationList } = props
  const ResumnProps = {
    title: '教育经历',
    tb: true,
  }
  return (
    <ResumnCard {...ResumnProps}>
      {educationList?.map((item, index) => (
        <div className="flex jbetween acenter" key={index}>
          <div>
            <span className="fw700 mr10">{item.school}</span>
            <span className="cb2">{item.major}</span>
          </div>
          <div className="cb2 font-12">{getType(item.edu_time) === 'Array' ? item.edu_time.join(' - ') : item.edu_time}</div>
        </div>
      ))}
    </ResumnCard>
  )
}
