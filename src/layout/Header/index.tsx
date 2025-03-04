import React, { useState } from 'react'
import styles from './index.module.scss'
import { Dropdown } from 'antd'
import { isWeb } from '@/utils/index'
import { useDispatch } from 'react-redux'
import { setSideOpen } from '@/store/features/app'

export default (): React.ReactElement => {
  const [activeKey, setActive] = useState('简体中文')
  const dispatch = useDispatch()
  const menu = [
    {
      label: <a onClick={setActive.bind(null, '简体中文')}>简体中文</a>,
      key: '3',
    },
  ]

  function openSide() {
    dispatch(setSideOpen(true))
  }
  return (
    <div className={styles.header}>
      {isWeb() ? undefined : (
        <a className={styles.language} style={{ marginRight: 12 }} onClick={openSide}>
          简历配置
        </a>
      )}

      <Dropdown menu={{ items: menu }} arrow={true}>
        <a className={styles.language} onClick={(e) => e.preventDefault()}>
          {activeKey}
        </a>
      </Dropdown>
    </div>
  )
}
