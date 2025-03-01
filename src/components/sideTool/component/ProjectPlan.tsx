import React, { useState } from 'react'
import { Form, Drawer, Input, Button, DatePicker, Row, Col, Tooltip } from 'antd'
import type { Resume, projectItem } from '@/typings/configType'
import styles from './index.module.scss'
import moment from 'moment'
import { validStartAndEndTime } from '@/utils/valid'

interface props {
  setResumn: (val: any, key: string, isArray?: boolean) => void
  projectList: Resume['projectList']
  planWidth: string | number
}
let current: projectItem = null!

export default function (props: props) {
  const { projectList, setResumn, planWidth } = props
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  function onClose() {
    setOpen(false)
  }
  function submitSave(values) {
    values.project_time = values.project_time.map((v) => moment(v).format('YYYY/MM/DD'))
    if (current) {
      projectList?.find((v, i) => {
        if (v.project_name == current.project_name) {
          projectList[i] = { ...values }
          return true
        }
      })
    } else {
      projectList?.push({ ...values })
    }
    current = null!
    setResumn(projectList, 'projectList', true)
    onClose()
    form.resetFields()
  }
  function removeItem(item) {
    setResumn(
      projectList?.filter((v) => v !== item),
      'projectList',
      true
    )
  }
  function viewItem(item) {
    item.project_time = [moment(item.project_time[0]), item.project_time[1] ? moment(item.project_time[1]) : '']
    form.setFieldsValue(item)
    current = item
    setOpen(true)
  }
  return (
    <div>
      {projectList?.map((v, i) => (
        <div key={i} className={[styles['education-item'], 'flex', 'acenter'].join(' ')} onClick={(e) => (e.stopPropagation(), viewItem.call(this, { ...v }))}>
          <span className="mr4">{i + 1}.</span>
          <div className="t-ellipsis flex1" style={{ display: 'inline-block' }}>
            <Tooltip title={v.project_name}>{v.project_name}</Tooltip>
          </div>
          <div className="c-red mr8" onClick={(e) => (e.stopPropagation(), removeItem.call(null, v))}>
            删除
          </div>
        </div>
      ))}
      <div className={styles['add-btn']} onClick={setOpen.bind(this, true)}>
        添加
      </div>
      <Drawer title="项目经历" open={open} maskClosable={true} onClose={onClose} width={planWidth}>
        <Form labelCol={{ span: 6 }} form={form} name="educationList" onFinish={submitSave} autoComplete="off">
          <Form.Item label="项目名称" name="project_name" rules={[{ message: '项目名称', required: true }]}>
            <Input placeholder="项目名称" />
          </Form.Item>
          <Form.Item label="角色" name="project_role">
            <Input placeholder="角色" />
          </Form.Item>
          <Form.Item label="技术栈" name="project_technology">
            <Input placeholder="技术栈" />
          </Form.Item>

          <Form.Item label="起始时间" required>
            <Row>
              <Col span={10}>
                <Form.Item name={['project_time', 0]} rules={[{ message: '请输入开始时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                -
              </Col>
              <Col span={10}>
                <Form.Item name={['project_time', 1]} rules={[{ message: '请输入结束时间', required: true }, { validator: validStartAndEndTime }]}>
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="描述" name="project_desc">
            <Input.TextArea placeholder="描述" />
          </Form.Item>
          <Form.Item label="负责内容" name="project_content">
            <Input.TextArea placeholder="负责内容" />
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
