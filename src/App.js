import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './Routing-PR/Admin-panel/reduxThunk/Store';
import Product from './Routing-PR/Admin-panel/Product';
import Cart from './Routing-PR/Admin-panel/Cart';


function App() {
  const [user, setUser] = useState(() => { })


  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="d-flex">
          <main className='w-100 dark-theme'>
            <Routes >             
              <Route path="/" element={<Product  />} ></Route>
              <Route path="/cart" element={<Cart />} ></Route>
              <Route path='*' element={<h1 className='container text-white '>404 Page Error...</h1>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
