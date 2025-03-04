import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store'
import BaseRoute from '@/router'

import 'antd/dist/antd.variable.min.css'
import './style/global.scss'
import '@/style/iconfont/iconfont.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Provider store={store}>
      <BaseRoute />
    </Provider>
  </StrictMode>
)
