import React from 'react'
import { Route , Switch } from 'react-router-dom'

import App from './App'
import Login from './components/Login'
import Shop from './components/Shop'
const userDat={email: "xxx@xxx.com",pass:"xxxx"}
const AppRoutes = () =>
<App userDat={userDat}>
  <Switch>
    <Route exact  path="/login" component={Login}/>
    <Route exact  path="/shop" component = {Shop}/>
    <Route   path="/" component = {Login}/>
  </Switch>
</App>;

export default AppRoutes;
