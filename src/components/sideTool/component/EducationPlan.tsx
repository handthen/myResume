import React, { useState } from 'react'
import { Form, Drawer, Input, Button, DatePicker, Row, Col } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import type { Resume } from '@/typings/configType'
import styles from './index.module.scss'
import moment from 'moment'
import { validStartAndEndTime } from '@/utils/valid'

interface props {
  setResumn: (val: any, key: string, isArray?: boolean) => void
  educationList: Resume['educationList']
  planWidth: string | number
}

export default function (props: props) {
  const { educationList, setResumn, planWidth } = props
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  function onClose() {
    setOpen(false)
  }
  function submitSave(values) {
    values.edu_time = values.edu_time.map((v) => moment(v).format('YYYY/MM/DD'))
    setResumn([...(educationList as []), { ...values }], 'educationList', true)
    onClose()
    form.resetFields()
  }
  function removeItem(item) {
    setResumn(
      educationList?.filter((v) => v !== item),
      'educationList',
      true
    )
  }
  return (
    <div>
      {educationList?.map((v, i) => (
        <div key={i} className={styles['education-item']}>
          <span className="mr4">{i + 1}.</span>
          <span className="mr8">
            {v.edu_time[0]} - {v.edu_time[1]}{' '}
          </span>
          <span>
            {v.school} - {v.major}
          </span>
          <CloseOutlined className="close-icon" onClick={removeItem.bind(null, v)} />
        </div>
      ))}
      <div className={styles['add-btn']} onClick={setOpen.bind(this, true)}>
        添加
      </div>
      <Drawer title="教育经历" open={open} maskClosable={true} onClose={onClose} width={planWidth}>
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
