import { useState } from 'react';
import Mint from './Mint';
import Connect from './Connect';
import MintCounter from './MintCounter'
import * as styled from './styles';



function App() {

  const[accounts, setAccounts] = useState([]);

  return (
    <styled.MintBox>
      <h1>MFDoomaverse</h1>
      <styled.P>3000 passes @ 0.06e each</styled.P>
      <styled.P>10000 passes @ 0.09e each</styled.P>
      <Mint accounts={accounts} setAccounts={setAccounts} />
      <Connect accounts={accounts} setAccounts={setAccounts} />
      <MintCounter />
    </styled.MintBox>
  );

};

export default App;