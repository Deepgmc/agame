import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Agame from './Agame';

// импорт объединения всех редьюсеров
import reducer from './reducers/combine';

var AGame_root_component = function(){
  var self = this,
      store = createStore(reducer);

  return {
    getStore: function(){
      return store;
    }
  }
};


// game app global object
var arc = new AGame_root_component();
window.arc = arc;

ReactDOM.render(
  <Provider store={arc.getStore()}>
    <Agame />
  </Provider>,
  document.getElementById('agame_root')
);
