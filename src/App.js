import React from 'react';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import store from './store/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <UserList />    
  </Provider>
);

export default App;