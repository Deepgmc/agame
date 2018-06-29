import React, {Component} from 'react';
import {
  HashRouter,
  Link
} from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  constructor(){
    super();
    this.itemList = [
      {
        link: '/overview',
        caption: 'Обзор',
        name: 'overview',
        selected: true
      },
      {
        link: '/resources',
        caption: 'Ресурсы',
        name: 'resources',
        selected: false
      }
    ]
  }

  render(){
    // левая менюшка
    return (
      <HashRouter>
      <div className="col col-sm-2">
        {
          this.itemList.map( function (item, index) {
            return <div key={index}><Link className='ag_menu_item' to={item.link}>{item.caption}</Link></div>;
          } )//map
        }
      </div>
      </HashRouter>
    )
  };
};

export default Menu;
