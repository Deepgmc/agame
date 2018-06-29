import React, {Component} from 'react'


class Overview extends Component {
  componentWillMount() {
    console.log('Overview will mount');
  }

  render(){
    // окно общей инфы
    return (
      <div>
        Overview
      </div>
    )
  };
};

export default Overview;
