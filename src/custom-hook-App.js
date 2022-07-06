import React from 'react';
import { UserInfo } from './UserInfo'
import { useCurrentUser } from "./useCurrentUser";
import { ProductInfo } from './ProductInfo'


function App() {


  
  return (
    <>
    <UserInfo userId='123' />
    <UserInfo userId='234' />
    <ProductInfo productId="1234" />
    <ProductInfo productId="2345" />
  
    {/*  <UserInfoWithLoader a={1} b={"Hello"} c={{name: 'shaun'}} /> */}
    </>
    );
}

export default App;
