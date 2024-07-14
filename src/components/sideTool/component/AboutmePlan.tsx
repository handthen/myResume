import React from 'react'
import { Form, Checkbox, Input, Select } from 'antd'
import type { Resume } from '@/typings/configType'

interface props {
  setResumn: (val: any, key: string) => void
  aboutme: Resume['aboutme']
}
export default function (props: props) {
  const { aboutme, setResumn } = props
  return (
    <>
      <Form.Item label="">
        <Input.TextArea placeholder="自我介绍" rows={8} maxLength={200} value={aboutme?.aboutme_desc} onChange={(e) => setResumn(e.target.value, 'aboutme')} />
      </Form.Item>
    </>
  )
}
