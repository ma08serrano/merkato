import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/registration/Register';

function App() {
  return (
    <div className='container-fluid m-0 p-0'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/Login' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
