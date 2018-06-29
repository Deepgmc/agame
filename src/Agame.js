import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import Menu from './components/menu/Menu';
import Game from './components/game/Game';

import './Agame.css'

class Agame extends React.Component {

  componentWillMount() {
    console.info('Agame Will mount');
  }

  render(){
    // глобальная разметка страницы (целиком все в контейнере agame_root прямом потомке window)
    return (
      <div className="container-fluid">
        <div className="countainer">
          <div className="row"><div className="col-xl-12 hdr_spacer"></div></div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-sm-3 bor"></div>
            <div className="col col-sm-6 bor">
              <div className="row">
                <Menu />
                <Game />
              </div>
            </div>
            <div className="col col-sm-3 bor">{this.props.agame.user.name}</div>
          </div>
        </div>
      </div>
    )
  };
};

export default connect(
  state => ({
    agame: state.agame
  }),
  dispatch => ({
    // initAgame: (init_data) => {
    //   dispatch({ type: 'AGAME_INIT', init_data: init_data });
    // }
  })
)(Agame);
