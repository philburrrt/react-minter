import { useState } from 'react';
import Mint from './Mint';
import Connect from './Connect';
import MintCounter from './MintCounter'
import * as styles from './styles.js';



function MintApp() {

  const[accounts, setAccounts] = useState([]);

  return (
    <styles.MintBox>
      <h1>MFDoomaverse</h1>
      <styles.P>3000 passes @ 0.06e each</styles.P>
      <styles.P>10000 passes @ 0.09e each</styles.P>
      <Mint accounts={accounts} setAccounts={setAccounts} />
      <Connect accounts={accounts} setAccounts={setAccounts} />
      <MintCounter />
    </styles.MintBox>
  );

};

export default MintApp;