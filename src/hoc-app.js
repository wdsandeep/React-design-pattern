import React from 'react';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo'
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';
import { ResourceInfoForm } from './ResourceInfoForm';

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {

  const UserInfoWrapped = printProps(UserInfo);

  return (
    <>
    <UserInfoForm />
    <br/><br/>
    <ResourceInfoForm />
    {/*  <UserInfoWithLoader a={1} b={"Hello"} c={{name: 'shaun'}} /> */}
    </>
    );
}

export default App;
