import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import store from './store/store';
import CharacterList from './components/ListCharacters'

class App extends Component {
  render() {
    return (

      <Provider store={store}>
          <div className="App">
              <Counter/>
              <hr/>
              <CharacterList/>
          </div>
      </Provider>
      
    );
  }
}

export default App;
