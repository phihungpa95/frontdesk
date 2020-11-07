import React, { useState } from 'react';
import './App.css'
import Header from './Component/header';
import Home from "./Component/Screens/home";
import Footer from './Component/footer';
import Product from "./Component/Screens/product";
import Company from "./Component/Screens/company";
import Plans from './Component/Screens/plans';
import Contact from './Component/Screens/contact';
import Careers from './Component/Screens/careers';
import Demo from './Component/Screens/demo'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import MyContext from './Context';
import './sass/main.scss';
import Loading from './Component/Loading';
function App() {
  let [loading, setLoading] = useState(false);
  // return <Demo>
  //   chilren
  // </Demo>
 


  return (
    <MyContext.Provider value={{loading, setLoading}}>
      <Router>
        
        <div className="App">
        {loading && <Loading />}

          <Header />
          
            <Switch>
                <Route path="/product">
                    <Product />
                  </Route>
                  <Route path="/company">
                    <Company />
                  </Route>
                  <Route path="/plans">
                    <Plans />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/careers">
                    <Careers />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>

              </Switch>
          <Footer />
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
