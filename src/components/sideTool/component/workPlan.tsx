import React, { useState } from 'react'
import { Form, Drawer, Input, Button, DatePicker, Row, Col, Tooltip } from 'antd'
import type { Resume, workExpItem } from '@/typings/configType'
import styles from './index.module.scss'
import moment from 'moment'
import { validStartAndEndTime } from '@/utils/valid'
import { CloseOutlined } from '@ant-design/icons'

interface props {
  setResumn: (val: any, key: string, isArray?: boolean) => void
  workExpList: Resume['workExpList']
  planWidth: string | number
}
let current: workExpItem = null!

export default function (props: props) {
  const { workExpList, setResumn, planWidth } = props
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  function onClose() {
    setOpen(false)
  }
  function submitSave(values) {
    console.log(current)

    values.work_time = values.work_time.map((v) => moment(v).format('YYYY/MM/DD'))
    if (current) {
      workExpList?.find((v, i) => {
        if (v.company_name == current.company_name) {
          workExpList[i] = { ...values }
          return true
        }
      })
    } else {
      workExpList?.push({ ...values })
    }
    current = null!
    setResumn(workExpList, 'workExpList', true)
    onClose()
    form.resetFields()
  }
  function removeItem(item) {
    setResumn(
      workExpList?.filter((v) => v !== item),
      'workExpList',
      true
    )
  }
  function viewItem(item) {
    item.work_time = [moment(item.work_time[0]), item.work_time[1] ? moment(item.work_time[1]) : '']
    form.setFieldsValue(item)
    current = item
    setOpen(true)
  }
  return (
    <div>
      {workExpList?.map((v, i) => (
        <div key={i} className={`${styles['education-item']}`} onClick={(e) => (e.stopPropagation(), viewItem.call(this, { ...v }))}>
          <div className="flex jbetween acenter">
            <div className="t-ellipsis flex1">
              <span className="mr4">{i + 1}.</span>
              <span>
                {v.company_name}-{v.department_name}
              </span>
              <span className="ml8">
                {v.work_time[0]} - {v.work_time[1]}{' '}
              </span>
            </div>
            <div className="c-red mr8" onClick={(e) => (e.stopPropagation(), removeItem.call(null, v))}>
              删除
            </div>
          </div>
          <div className="t-ellipsis mt6" style={{ display: 'inline-block' }}>
            <Tooltip title={v.work_desc}>{v.work_desc}</Tooltip>
          </div>
        </div>
      ))}
      <div className={styles['add-btn']} onClick={setOpen.bind(this, true)}>
        添加
      </div>
      <Drawer title="工作经历" open={open} maskClosable={true} onClose={onClose} width={planWidth}>
        <Form labelCol={{ span: 6 }} form={form} name="educationList" onFinish={submitSave} autoComplete="off">
          <Form.Item label="公司" name="company_name" rules={[{ message: '请输入公司', required: true }]}>
            <Input placeholder="公司" />
          </Form.Item>
          <Form.Item label="部门" name="department_name" rules={[{ message: '请输入部门', required: true }]}>
            <Input placeholder="部门" />
          </Form.Item>
          <Form.Item label="起始时间" required>
            <Row>
              <Col span={10}>
                <Form.Item name={['work_time', 0]} rules={[{ message: '请输入开始时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                -
              </Col>
              <Col span={10}>
                <Form.Item name={['work_time', 1]} rules={[{ message: '请输入结束时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="内容" required name="work_desc">
            <Input.TextArea placeholder="内容" rows={8} maxLength={200} />
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
