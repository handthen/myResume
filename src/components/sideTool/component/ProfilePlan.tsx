import React from 'react'
import { Form, Input } from 'antd'
import type { Resume } from '@/typings/configType'
interface props {
  setResumn: (val: any, key: string) => void
  profile: Resume['profile']
}

export default function (props: props) {
  const { setResumn, profile } = props
  return (
    <>
      <Form.Item label="姓名">
        <Input placeholder="请输入姓名" value={profile?.name} onChange={(e) => setResumn(e.target.value, 'profile.name')} maxLength={8} />
      </Form.Item>
      <Form.Item label="手机号码">
        <Input placeholder="请输入手机号码" value={profile?.mobile} onChange={(e) => setResumn(e.target.value, 'profile.mobile')} maxLength={11} />
      </Form.Item>
      <Form.Item label="邮箱">
        <Input placeholder="请输入邮箱" value={profile?.email} onChange={(e) => setResumn(e.target.value, 'profile.email')} maxLength={22} />
      </Form.Item>
      <Form.Item label="gihub">
        <Input placeholder="请输入gihub地址" value={profile?.github} onChange={(e) => setResumn(e.target.value, 'profile.github')} maxLength={22} />
      </Form.Item>
    </>
  )
}
