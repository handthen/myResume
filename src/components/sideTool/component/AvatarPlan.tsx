import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Checkbox, Input, Select } from 'antd'
import type { State } from '@/typings/storeType'
export default function (props: any) {
  const resumeConfig = useSelector<State, State['app']['resumeConfig']>((state) => state.app.resumeConfig)

  return (
    <>
      <Form>
        <Form.Item label="隐藏头像">
          <Checkbox checked={resumeConfig.avatar?.hidden} onChange={(e) => props.setResumn(e.target.checked, 'avatar.hidden')} />
        </Form.Item>
        <Form.Item label="头像地址">
          <Input placeholder="请输入头像地址" value={resumeConfig.avatar?.src} onChange={(e) => props.setResumn(e.target.value, 'avatar.src')} />
        </Form.Item>
        <Form.Item label="头像样式">
          <Select value={resumeConfig.avatar?.mode} onChange={(e) => props.setResumn(e, 'avatar.mode')}>
            <Select.Option value={1}>方形</Select.Option>
            <Select.Option value={2}>圆形</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  )
}
