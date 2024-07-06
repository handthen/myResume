import React from 'react'
import type { Resume } from '@/typings/configType'
import ResumnCard from '@/components/ResumnCard'
import { getType } from '@/utils'

export default (props: Resume): React.ReactElement => {
  const { workExpList } = props
  const ResumnProps = {
    title: '工作经历',
  }
  return (
    <ResumnCard {...ResumnProps}>
      {workExpList?.map((v, i) => (
        <div key={i} className='mb10'>
          <div className="flex jbetween acenter">
            <div>
              <span className="fw700 font-18 mr10">{v.company_name}</span>
              <span className="cb2">{v.department_name}</span>
            </div>
            <div className="cb2 font-12">{getType(v.work_time) === 'Array' ? v.work_time?.join(' - ') : v.work_time}</div>
          </div>
          <div className="font-14 t-line cb2 mt4">
            <span>{v.work_desc}</span>
          </div>
        </div>
      ))}
    </ResumnCard>
  )
}
