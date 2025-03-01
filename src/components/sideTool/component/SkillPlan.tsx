import React, { useState } from 'react'
import { Form, Drawer, Input, Button, DatePicker, Row, Col } from 'antd'
import type { Resume } from '@/typings/configType'
import styles from './index.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import moment from 'moment'
interface props {
  setResumn: (val: any, key: string, isArray?: boolean) => void
  skillList: Resume['skillList']
  planWidth: string | number
}
let current = null

export default function (props: props) {
  const { skillList, setResumn, planWidth } = props
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  function onClose() {
    setOpen(false)
  }
  function submitSave(values) {
    if (current !== null) {
      skillList![current] = { ...values }
    } else {
      skillList?.push({ ...values })
    }
    setResumn(skillList, 'skillList', true)
    onClose()
    form.resetFields()
    current = null
  }
  function removeItem(item) {
    setResumn(
      skillList?.filter((v) => v !== item),
      'skillList',
      true
    )
  }
  function viewItem(item, i) {
    form.setFieldsValue(item)
    current = i
    setOpen(true)
  }

  return (
    <div>
      {skillList?.map((v, i) => (
        <div key={i} className={styles['education-item']} onClick={viewItem.bind(this, { ...v }, i)}>
          <span className="mr4">{i + 1}.</span>
          <span className="mr4">{v.skill_name}</span>
          <span>{v.skill_desc}</span>
          <CloseOutlined className="close-icon" onClick={removeItem.bind(null, v)} />
        </div>
      ))}
      <div className={styles['add-btn']} onClick={setOpen.bind(this, true)}>
        添加
      </div>
      <Drawer title="个人技能" open={open} maskClosable={true} onClose={onClose} width={planWidth}>
        <Form labelCol={{ span: 6 }} form={form} name="educationList" onFinish={submitSave} autoComplete="off">
          <Form.Item label="技能名称" name="skill_name" rules={[{ message: '技能名称', required: false }]}>
            <Input placeholder="技能名称" />
          </Form.Item>
          <Form.Item label="描述" name="skill_desc" rules={[{ message: '描述', required: true }]}>
            <Input placeholder="描述" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
