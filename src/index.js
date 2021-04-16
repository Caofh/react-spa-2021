import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import reportWebVitals from './reportWebVitals';

// 公用js
import { initAsyn_promise } from '@/utils/loadJs'

let sourceArr = ['moment'] // vant的cdn路径、飞书sdk
initAsyn_promise(sourceArr).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
})

// reportWebVitals(console.log);