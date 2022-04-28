import { useState } from 'react';
import Mint from './Mint';
import Connect from './Connect';
import MintCounter from './MintCounter'
import * as styled from './styles';



function App() {

  const[accounts, setAccounts] = useState([]);

  return (
    <styled.MintBox>
      <h1>Collection Name</h1>
      <Mint accounts={accounts} setAccounts={setAccounts} />
      <Connect accounts={accounts} setAccounts={setAccounts} />
      <MintCounter />
    </styled.MintBox>
  );

};

export default App;