import React from 'react';

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

import { deepClone } from '@/utils/common/deepClone.js'

class Page1 extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      console.log(123)
    }, 5000)

    console.log('deepClone:', deepClone)
  }

  goPage2() {
    this.props.history.push('/Page2')
  }

  render() {
    // 从props中解构store
    let { pageTitle } = this.props

    return (
      <div>
        <div className="blue" onClick={this.goPage2.bind(this)}>跳转page2</div>
        <div>redux状态：{pageTitle}</div>
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

// export default Page1;
export default connect(getList, null)(Page1);