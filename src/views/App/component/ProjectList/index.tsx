import React from 'react'
import type { Resume } from '@/typings/configType'
import ResumnCard from '@/components/ResumnCard'
import { getType } from '@/utils'

export default (props: Resume): React.ReactElement => {
  const { projectList } = props
  const resumnProps = {
    title: '项目经历',
  }
  return (
    <ResumnCard {...resumnProps}>
      {projectList?.map((v, i) => (
        <div key={i} className="mb20">
          <div>
            <div className="flex jbetween mb8">
              <div>
                <span className="font-16 fw700">{v.project_name}</span>
                <span className="cb2 font-12 ml8">{getType(v.project_time) === 'Array' ? (v.project_time as [])?.join(' - ') : v.project_time}</span>
              </div>
              <div className="">{v.project_role}</div>
            </div>
            <div className="font-14 mb4">
              <span className="fw700">技术栈：</span>
              <span>{v.project_technology}</span>
            </div>
            <div className="font-14 mb4">
              <span className="fw700">项目描述：</span>
              <span>{v.project_desc}</span>
            </div>
            <div className="font-14">
              <span className="fw700">主要工作：</span>
              <span>{v.project_content}</span>
            </div>
          </div>
        </div>
      ))}
    </ResumnCard>
  )
}
