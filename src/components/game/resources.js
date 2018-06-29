import React, {Component} from 'react'


class Resources extends Component {
  componentWillMount() {
    console.log('Resources will mount');
  }

  render(){
    // окно обзора ресурсов
    return (
      <div>
        Ресурсы тут
      </div>
    )
  };
};

export default Resources;
