import React, { useState } from 'react';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

const listTab = [
  {
    id: 'signin',
    title: 'Sign Up',
    // content:  <Signup />
  },
  {
    id: 'login',
    title: 'Log In',
    // content: <Login />
  }
]

const App = () => {
  const [tab, setTab] = useState(listTab[0].id);
  return (
    <div className="wrapper">
      <div className="auth-container">
        <div className="auth-tab">
          {
            listTab && listTab.map((item, index) => (
              <div
                className={`auth-tab__item ${tab === item.id ? 'active' : ''}`}
                key={item.id || `auth-tab-${index}`}
                onClick={() => setTab(item.id)}
              >{item.title || ''}</div>
            ))
          }
        </div>
        <div className='auth-tab__form'>
          {
            (tab === 'signin') ?
              <Signup />
              :
              <Login />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
