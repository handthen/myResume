import React, { useState } from 'react'
import { Form, Drawer, Input, Button, DatePicker, Row, Col, Tooltip } from 'antd'
import type { Resume } from '@/typings/configType'
import styles from './index.module.scss'
import moment from 'moment'
import { validStartAndEndTime } from '@/utils/valid'
import { CloseOutlined } from '@ant-design/icons'

interface props {
  setResumn: (val: any, key: string, isArray?: boolean) => void
  workExpList: Resume['workExpList']
  planWidth: string | number
}

export default function (props: props) {
  const { workExpList, setResumn, planWidth } = props
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  function onClose() {
    setOpen(false)
  }
  function submitSave(values) {
    values.work_time = values.work_time.map((v) => moment(v).format('YYYY/MM/DD'))
    setResumn([...(workExpList as []), { ...values }], 'workExpList', true)
  }
  function removeItem(item) {
    setResumn(
      workExpList?.filter((v) => v !== item),
      'workExpList',
      true
    )
  }
  return (
    <div>
      {workExpList?.map((v, i) => (
        <div key={i} className={styles['education-item']}>
          <span className="mr4">{i + 1}.</span>
          <span>
            {v.company_name}-{v.department_name}
          </span>
          <span className="ml8">
            {v.work_time[0]} - {v.work_time[1]}{' '}
          </span>
          <div className="t-ellipsis mt6" style={{ display: 'inline-block' }}>
            <Tooltip title={v.work_desc}>{v.work_desc}</Tooltip>
          </div>
          <CloseOutlined className="close-icon" onClick={removeItem.bind(null, v)} />
        </div>
      ))}
      <div className={styles['add-btn']} onClick={setOpen.bind(this, true)}>
        添加
      </div>
      <Drawer title="工作经历"  open={open} maskClosable={true} onClose={onClose} width={planWidth}>
        <Form labelCol={{ span: 6 }} form={form} name="educationList" onFinish={submitSave} autoComplete="off">
          <Form.Item label="学校" name="school" rules={[{ message: '请输入学校', required: true }]}>
            <Input placeholder="学校" />
          </Form.Item>
          <Form.Item label="专业" name="major" rules={[{ message: '请输入专业', required: true }]}>
            <Input placeholder="专业" />
          </Form.Item>
          <Form.Item label="起始时间" required>
            <Row>
              <Col span={10}>
                <Form.Item name={['edu_time', 0]} rules={[{ message: '请输入开始时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                -
              </Col>
              <Col span={10}>
                <Form.Item name={['edu_time', 1]} rules={[{ message: '请输入结束时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
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
