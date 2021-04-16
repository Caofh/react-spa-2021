/* eslint-disable */

import React from 'react';

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setPageTitle } from '@/store/actions.js'

import appCss from './Home.module.scss'

import { deepClone } from '@/utils/common/deepClone.js'
import gateWay from '@/config/gateway.config.js'

class Home extends React.Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.state = {
      value: '123',
    };

  }

  componentDidMount() {
    console.log('moment:', moment)
    console.log('deepClone:', deepClone)

    console.log('改变了redux中的转套state：pageTitle => redux测试标题啊')
    this.props.setTitle('redux测试标题啊')
  }

  handleChange() {
    this.setState({ value: '花擦嘞' }, () => {
      console.log(this.state)
    });

  }

  goPage() {
    this.props.history.push('/Page1')
  }
  goPage2() {
    this.props.history.push('/Page2')
  }

  getGreeting(user) {
    if (user) {
      return <h1>Hello, 皇上!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  getList() {
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number, index) => {
      return <li key={index}>{number}</li>
    });

    let list = listItems.filter((item, index) => {
      return index % 2 === 0
    })

    return <ul>{list}</ul>
    // return list
  }

  render() {
    // const { setPageTitle } = this.props
    // console.log(setPageTitle)

    // setPageTitle()

    let ele = this.getGreeting()
    let list = this.getList()

    // 从props中解构store
    let { pageTitle } = this.props

    // console.log('redux数据：')
    // console.log(pageTitle)

    return (
      <div>
        <div onClick={this.goPage.bind(this)}>跳转page1</div>
        <div onClick={this.goPage2.bind(this)}>跳转page2</div>
        <div onClick={this.handleChange.bind(this)}>点我啊</div>
        <div>{this.state.value}</div>
        {ele}
        {list}

        <div>-----</div>
        <div className={appCss.blue}>
          <h1>{pageTitle}</h1>
        </div>
      </div>
    );
  }
}


//需要渲染什么数据
const getList = state => {
  // console.log(state, 'state')
  return {
    pageTitle: state.pageTitle,
  }
}

//需要触发什么行为,必须要引用redux中actions的方法
function mapDispatchToProps(dispatch) {
  return {
    setTitle: (data) => {
      setPageTitle(data, dispatch)
    },
  }
}

// export default Home;
export default connect(getList, mapDispatchToProps)(Home);