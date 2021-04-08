import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import AddBooks from './components/AddBooks/AddBooks';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import ManageBooks from './components/ManageBooks/ManageBooks';

export const UserContext=createContext();

function App() {

  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
            <Switch>
                <Route path="/header">
                    <Header></Header>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                   <Login></Login>
                </Route>
                <PrivateRoute path="/admin">
                   <Admin></Admin>
                </PrivateRoute>
                <Route path="/addbooks">
                   <AddBooks></AddBooks>
                </Route>
                <Route path="/managebooks">
                   <ManageBooks></ManageBooks>
                </Route>
                <PrivateRoute path="/checkout/:id">
                    <CheckOut></CheckOut>
                </PrivateRoute>
                <PrivateRoute path="/orders">
                    <Orders></Orders>
                </PrivateRoute>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
  );
}

export default App;
