import React from 'react';
import Profile from './Components/Profile.js'
import Id from './Components/Id.js'
import User from './Components/User.js'
import {Provider} from 'react-redux'
import store from './Redux/Store.js'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Profile/> 
        <Id/>
        <User/>
      </div>
    </Provider>  
  );
}

export default App;
