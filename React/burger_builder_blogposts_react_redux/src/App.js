import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About/About'
import SingleComponent from './components/SingleComponent/SingleComponent'

function App() {
  return (
    <div>
      <BrowserRouter >
      <Layout>
        <Switch>
      <Route exact path='/' component={BurgerBuilder} />
      <Route path='/about' component={About} />
      <Route path='/:post_id' component={SingleComponent} />
      </Switch>
      </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
