import React from 'react';
import LoginForm from './profile/Login';
import CreateAccountForm from './profile/CreateAccount';

function App() {
  return (
    <React.Fragment>
      <LoginForm></LoginForm>
      <CreateAccountForm></CreateAccountForm>
    </React.Fragment>
  );
}

export default App;