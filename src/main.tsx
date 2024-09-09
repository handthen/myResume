// import React, { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import store from '@/store'
// import BaseRoute from '@/router'
// import { HashRouter } from 'react-router-dom'
// import 'antd/dist/antd.variable.min.css'
// import './style/global.scss'
// import '@/style/iconfont/iconfont.css'

// createRoot(document.getElementById('app')!).render(
//   <StrictMode>
//     <HashRouter>
//       <Provider store={store}>
//         <BaseRoute />
//       </Provider>
//     </HashRouter>
//   </StrictMode>
// )

const obj = {
  name: 'jom',
}

const a = 1
console.log(obj.name?.a?.b)
console.log(obj.name.a.b)
