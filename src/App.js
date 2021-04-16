import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 公共样式
import '@/App.scss'

// 状态管理：Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.js'

// 页面模版
import Home from './views/home/Home';
const Page1 = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import(/* webpackChunkName: "Page1" */ './views/Page1') // webpack的魔法注释，将拆分出的js命名为Page1
  )
})
const Page2 = lazy(() => import(/* webpackChunkName: "Page2" */ './views/Page2')) // webpack的魔法注释，将拆分出的js命名为Page2
const Page3 = lazy(() => import(/* webpackChunkName: "Page3" */ './views/Page3')) // webpack的魔法注释，将拆分出的js命名为Page3

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router >

          <div>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Page1" exact component={Page1} />
                <Route path="/Page2" exact component={Page2} />
                <Route path="/Page3" exact component={Page3} />
              </Switch>
            </Suspense>
          </div>

        </Router>
      </Provider>
    )
  }
}
export default App;