import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Checkbox, Input, Select } from 'antd'
import type { Resume } from '@/typings/configType'

interface props {
  setResumn: (val: any, key: string) => void
  avatar: Resume['avatar']
}
export default function (props: props) {
  const { avatar, setResumn } = props
  return (
    <>
      <Form.Item label="隐藏头像">
        <Checkbox checked={avatar?.hidden} onChange={(e) => setResumn(e.target.checked, 'avatar.hidden')} />
      </Form.Item>
      <Form.Item label="头像地址">
        <Input placeholder="请输入头像地址" value={avatar?.src} onChange={(e) => setResumn(e.target.value, 'avatar.src')} />
      </Form.Item>
      <Form.Item label="头像样式">
        <Select value={avatar?.mode} onChange={(e) => setResumn(e, 'avatar.mode')}>
          <Select.Option value={1}>方形</Select.Option>
          <Select.Option value={2}>圆形</Select.Option>
        </Select>
      </Form.Item>
    </>
  )
}
