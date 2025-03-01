import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Upload, message, Form } from 'antd'
import { print, copyText, isWeb } from '@/utils'
import ColorPlan from '@/components/colorPlan'
import { Dropdown, ConfigProvider, Drawer, Radio, Collapse } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import type { State } from '@/typings/storeType'
import AcatarPlan from './component/AvatarPlan'
import ProfilePlan from './component/ProfilePlan'
import EducationPlan from './component/EducationPlan'
import AboutmePlan from './component/AboutmePlan'
import SkillPlan from './component/SkillPlan'
import WorkPlan from './component/workPlan'
import ProjectPlan from './component/ProjectPlan'
import Style from './component/index.module.scss'

const styles: any = {
  tool: {
    position: 'sticky',
    top: 8,
    marginLeft: 10,
  },
}

const planWidth = isWeb() ? 400 : '80%'

export default (): React.ReactElement => {
  const dispatch = useDispatch()
  const editRef = useRef<any>()
  const theme = useSelector<State, State['app']['theme']>((state) => state.app.theme)
  const sideOpen = useSelector<State, State['app']['sideOpen']>((state) => state.app.sideOpen)
  const resumeConfig = useSelector<State, State['app']['resumeConfig']>((state) => state.app.resumeConfig)
  function importConfigFile({ file }) {
    if (!window.FileReader) {
      return message.error('该浏览器版本过低，请更换浏览器重试')
    }

    const reader = new FileReader()

    reader.onload = function () {
      try {
        const config = JSON.parse(this.result as string)
        dispatch({
          type: 'app/set_resume_config',
          payload: config,
        })
      } catch (e) {
        console.log(e)
        message.error('上传错误，请检查上传格式: JSON')
      }
    }

    reader.readAsText(file)
  }
  function onChange(e) {
    dispatch({
      type: 'app/set_theme_color',
      payload: {
        themeColor: e.b16,
      },
    })
    ConfigProvider.config({
      theme: {
        primaryColor: e.b16,
      },
    })
  }

  function editResumn() {
    editRef.current.setOpen(true)
  }

  const Side = () => (
    <>
      <Upload accept=".json" showUploadList={false} customRequest={importConfigFile}>
        <Button type="primary">导入配置</Button>
      </Upload>
      <Button className="mt10" type="primary" onClick={editResumn}>
        修改配置
      </Button>
      <Button className="mt10" type="primary" onClick={copyText.bind(null, JSON.stringify(resumeConfig))}>
        复制配置
      </Button>
      <Button className="mt10" type="primary" onClick={print}>
        打印pdf
      </Button>

      <Dropdown dropdownRender={() => <ColorPlan width={220} height={160} defaultColor={theme.themeColor} onChange={onChange} />}>
        <Button className="mt10" type="primary">
          色板
        </Button>
      </Dropdown>
    </>
  )

  return (
    <div style={styles.tool} className={'flex-column no-print xs-hidden'}>
      <div className="side-web flex-column">
        <Upload accept=".json" showUploadList={false} customRequest={importConfigFile}>
          <Button type="primary">导入配置</Button>
        </Upload>
        <Button className="mt10" type="primary" onClick={editResumn}>
          修改配置
        </Button>
        <Button className="mt10" type="primary" onClick={copyText.bind(null, JSON.stringify(resumeConfig))}>
          复制配置
        </Button>
        <Button className="mt10" type="primary" onClick={print}>
          打印pdf
        </Button>

        <Dropdown dropdownRender={() => <ColorPlan width={220} height={160} defaultColor={theme.themeColor} onChange={onChange} />}>
          <Button className="mt10" type="primary">
            色板
          </Button>
        </Dropdown>
      </div>
      <Drawer
        open={sideOpen}
        onClose={() => {
          dispatch({ type: 'app/set_sideOpen', payload: false })
        }}
        maskClosable={true}
        width={120}
      >
        <div className="flex-column">
          <Upload accept=".json" showUploadList={false} customRequest={importConfigFile}>
            <Button type="primary">导入配置</Button>
          </Upload>
          <Button className="mt10" type="primary" onClick={editResumn}>
            修改配置
          </Button>
          <Button className="mt10" type="primary" onClick={copyText.bind(null, JSON.stringify(resumeConfig))}>
            复制配置
          </Button>
          <Button className="mt10" type="primary" onClick={print}>
            打印pdf
          </Button>

          <Dropdown dropdownRender={() => <ColorPlan width={220} height={160} defaultColor={theme.themeColor} onChange={onChange} />}>
            <Button className="mt10" type="primary">
              色板
            </Button>
          </Dropdown>
        </div>
      </Drawer>
      <EditDrawer ref={editRef} />
    </div>
  )
}

const EditDrawer = forwardRef(function (props, ref): React.ReactElement {
  const [open, setOpen] = useState(false)
  const [activeTab, setActive] = useState(1)
  useImperativeHandle(ref, () => ({
    setOpen,
  }))

  function onClose() {
    setOpen(false)
  }

  function onChangeActive(e) {
    const { target } = e
    setActive(target.value)
  }
  const extra = (
    <Radio.Group value={activeTab} onChange={onChangeActive} style={{ marginBottom: 16 }}>
      <Radio.Button value={1}>配置简历</Radio.Button>
      <Radio.Button value={2}>模板</Radio.Button>
    </Radio.Group>
  )
  return (
    <Drawer extra={extra} open={open} maskClosable={true} onClose={onClose} width={planWidth}>
      {activeTab == 1 && <Active1 />}
      {activeTab == 2 && <Active2 />}
    </Drawer>
  )
})

function Active1() {
  const { Panel } = Collapse
  const dispatch = useDispatch()
  const resumeConfig = useSelector<State, State['app']['resumeConfig']>((state) => state.app.resumeConfig)

  function setResumn(val: any, key: string, isArray?: boolean) {
    let targte = {}
    let currentTagger = targte
    // if (isArray && Array.isArray(resumeConfig[key])) {
    //   val = resumeConfig[key].concat(val)
    // }
    const keys = key.split('.')
    for (let i = 0; i < keys.length; i++) {
      const v = keys[i]
      if (keys.length == i + 1) {
        currentTagger[v] = val
      } else {
        targte[v] = {}
      }
      currentTagger = targte[v]
    }
    console.log(targte, '--targte')
    dispatch({
      type: 'app/set_resume_config',
      payload: targte,
    })
  }
  const baseProp = {
    setResumn,
    planWidth,
  }
  return (
    <Form labelCol={{ span: 6 }}>
      <Collapse ghost={true} className="collapse" accordion>
        <Panel header="头像设置" key="1">
          <AcatarPlan {...baseProp} avatar={resumeConfig.avatar} />
        </Panel>
        <Panel header="个人信息" key="2">
          <ProfilePlan {...baseProp} profile={resumeConfig.profile} />
        </Panel>
        <Panel header="教育背景" key="3">
          <EducationPlan {...baseProp} educationList={resumeConfig.educationList} />
        </Panel>
        <Panel header="自我介绍" key="4">
          <AboutmePlan {...baseProp} aboutme={resumeConfig.aboutme} />
        </Panel>
        {/* <Panel header="个人作品" key="5"></Panel> */}
        <Panel header="个人技能" key="6">
          <SkillPlan {...baseProp} skillList={resumeConfig.skillList} />
        </Panel>
        <Panel header="工作经历" key="7">
          <WorkPlan {...baseProp} workExpList={resumeConfig.workExpList} />
        </Panel>
        <Panel header="项目经历" key="8">
          <ProjectPlan {...baseProp} projectList={resumeConfig.projectList} />
        </Panel>
      </Collapse>
    </Form>
  )
}

function Active2() {
  return <div className="mt40 flex jcenter">暂无模板</div>
}
