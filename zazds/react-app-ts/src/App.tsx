import React, { useEffect } from 'react';
// import Home from './components/Home'
// import logo from './logo.svg';
// import { Product, Order } from './data/entities';
// import ProductList from './components/ProductList';

import { dataStore } from './data/dataStore';
import { Provider } from 'react-redux';
import { HttpHander } from './data/httpHandler';
// import { } from './data/entities';
// import { FC } from 'react';
import { ConnectProductList } from './data/productListConnector';
import { Summary } from './components/Summary';
import { OrderDetailWrap } from './components/OrderDetail';

import './App.css';
import { addProduct } from './data/actionCreater';
import { Switch, Route, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom'


// let testData: Product[] = [1, 2, 3, 4, 5].map(num =>
// ({
//   id: num, name: `Prod${num}`, category: `Cat${num % 2}`,
//   description: `Product ${num}`, price: 100
// }))


// interface Props {

// }

function App() {

  useEffect(() => {
    HttpHander.loadProducts((data) => {
      dataStore.dispatch(addProduct(...data))
    })
  }, [])


  const submitCallback = (routeProps: RouteComponentProps): void => {
    HttpHander.storeOrder(dataStore.getState().order, id => routeProps.history.push(`/summary/${id}`));
  }

  return (
    <div className="App">
      {/* <Home name="你好" /> */}

      <Provider store={dataStore} >
        <BrowserRouter>
          <Switch>
            <Route path="/products" component={ConnectProductList}></Route>
            <Route path="/summary/:id" component={Summary}></Route>
            <Route path="/order" render={(props) => <OrderDetailWrap {...props} submitCallback={() => submitCallback(props)} />}></Route>
            <Redirect to="/products"></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div >
  );
}

export default App;
