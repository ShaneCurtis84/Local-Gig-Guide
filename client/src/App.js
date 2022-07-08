import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
      },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Header />
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/signup" element={<Signup/>}></Route>
                 
              </Routes>
              <Footer />
          </Router>
      </ApolloProvider>
  )
}

export default App;
