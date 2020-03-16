import React, { useState } from 'react';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

const listTab = [
  {
    id: 'signin',
    title: 'Sign Up',
    content:  <Signup />
  },
  {
    id: 'login',
    title: 'Log In',
    content: <Login />
  }
]

const App = () => {
  const [tab, setTab] = useState(listTab[0]);
  return (
    <div className="wrapper">
      <div className="auth-container">
        <div className="auth-tab">
          {
            listTab && listTab.map((item, index) => (
              <div
                className={`auth-tab__item ${tab.id === item.id ? 'active' : ''}`}
                key={item.id || `auth-tab-${index}`}
                onClick={() => setTab(item)}
              >{item.title || ''}</div>
            ))
          }
        </div>
        <div className='auth-tab__form'>
          {
            (tab && tab.content)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
