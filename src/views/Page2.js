import React from 'react';

class Page1 extends React.Component {
  goPage3() {
    this.props.history.push('/Page3')
  }

  render() {
    return (
      <div>
        <div onClick={this.goPage3.bind(this)}>跳转page3</div>
      </div>
    );
  }
}

export default Page1;