const initDataFromServer = {
  user: { name: 'Sergey', registerDate: '20.06.2018',  age: 30 },
  game: {
    planet: { name: 'Earth', system: 1, position: 4 },
    resources: { iron: 100, crystal: 50, fuel: 10 }
  }
}
/**
  =============================================================
  записываем глобальный стэйт приложения (данные получены с сервера)
  =============================================================
*/
//this.props.initAgame(initDataFromServer);


export default function app_reducer(state = initDataFromServer, action) {
  switch (action.type) {
    case 'AGAME_INIT':
      console.log('AGAME INIT REDUCER', action.init_data);
      return action.init_data;
      break;
    default:
      return state;
  }//switch
}//export
