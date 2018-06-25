import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App'

class App extends React.Component {
  render(){
    return (
      <div>
        <h2>App rendering</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-root')
);
