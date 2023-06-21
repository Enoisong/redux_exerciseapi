import React from 'react';
import { Provider } from 'react-redux';
import UsersLists from './components/UsersLists';
import store from './store/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <UsersLists />    
  </Provider>
);

export default App;