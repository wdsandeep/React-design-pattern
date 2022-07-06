import React from 'react';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo'

function App() {

  const UserInfoWrapped = printProps(UserInfo);

  return (
    <UserInfoWrapped a={1} b={"Hello"} c={{name: 'shaun'}} />
    );
}

export default App;
