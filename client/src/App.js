import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


// Import Page Components //

import NavBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


//Import Pages //

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: "/graphql",
});


const client = new ApolloClient({

  cache: new InMemoryCache(httpLink),
});


function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Header />
              <NavBar />
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/signup" component={Signup}></Route>
                 
              </Switch>
              <Footer />
          </Router>
      </ApolloProvider>
  )
}

export default App;
