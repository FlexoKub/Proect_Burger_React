
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Function/context';

const firebaseConfig = {
  apiKey: "AIzaSyB2hj7bGgKI6tbYR1_0dav_42hqBh1-PUo",
  authDomain: "pizza-burger-7004d.firebaseapp.com",
  databaseURL: "https://pizza-burger-7004d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizza-burger-7004d",
  storageBucket: "pizza-burger-7004d.appspot.com",
  messagingSenderId: "308777172102",
  appId: "1:308777172102:web:d6db69229ebbcc6339a507"
};

firebase.initializeApp(firebaseConfig);

function App() {
  
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  // console.log('Item:', openItem);
  return (
    <Context.Provider value={{
      auth,
      openItem
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order 
        {...orders} 
        {...openItem} 
        {...auth}
        firebaseDatabase={firebase.database}
        {...orderConfirm}
      />
      <Menu/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      {orderConfirm.openOrderConfirm && 
          <OrderConfirm 
          {...orders} 
          {...auth}
          firebaseDatabase={firebase.database}
          {...orderConfirm}/>}
    </Context.Provider>
  );
}

export default App;
