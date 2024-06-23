import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store';
import BaseRoute from '@/router';
import { HashRouter } from 'react-router-dom';
import './style/global.scss';

if(NODE_ENV=='development'){
    require("antd/dist/antd.variable.min.css")
}
createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <BaseRoute />
      </Provider>
    </HashRouter>
  </StrictMode>
);
