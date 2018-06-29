import React, {Component} from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

// импорт основных игровых областей
import Overview from './overview';
import Resources from './resources';

class Game extends Component {
  componentWillMount() {
    console.info('Game will mount');
  }

  render(){
    // главная игровая область
    return (
        <HashRouter>
          <div className="col col-sm-10 game_container">
            <Route path='/overview' component={Overview} />
            <Route path='/resources' component={Resources} />
          </div>
        </HashRouter>
    )
  };
};

export default Game;
