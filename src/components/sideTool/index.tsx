import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Upload, message } from 'antd'
import { print, copyText } from '@/utils'
import ColorPlan from '@/components/colorPlan'
import { Dropdown, ConfigProvider } from 'antd'
import type { State } from '@/typings/storeType'
const styles: any = {
  tool: {
    position: 'sticky',
    top: 8,
    marginLeft: 10,
  },
}

export default (): React.ReactElement => {
  const dispatch = useDispatch()
  const theme = useSelector<State, State['app']['theme']>((state) => state.app.theme)
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

  return (
    <div style={styles.tool} className="flex-column no-print">
      <Upload accept=".json" showUploadList={false} customRequest={importConfigFile}>
        <Button type="primary">导入配置</Button>
      </Upload>
      <Button className="mt10" type="primary" onClick={print}>
        打印pdf
      </Button>
      <Button className="mt10" type="primary" onClick={copyText.bind(null, JSON.stringify(resumeConfig))}>
        复制配置
      </Button>
      <Dropdown dropdownRender={() => <ColorPlan width={220} height={160} defaultColor={theme.themeColor} onChange={onChange} />}>
        <Button className="mt10" type="primary">
          主题
        </Button>
      </Dropdown>
    </div>
  )
}
