import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import { DataSource } from './DataSource';
import axios from 'axios';

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => {
  console.log(key);
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>

    <DataSource getDataFunc={getLocalStorageData('message')} resourcename="message">
      <Text />
    </DataSource>
    <DataSource getDataFunc={getServerData('/users/123') } resourceName="user">
      <UserInfo />
    </DataSource>

    <ResourceLoader resourceUrl="/products/1234" resourceName="product">
      <ProductInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl="/users/234" resourceName="user">
      <UserInfo />
    </ResourceLoader>
    <UserLoader userId="234">
      <UserInfo />
    </UserLoader>
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
    </>
    );
}

export default App;
