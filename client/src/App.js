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


import Header from './components/Header';
import Footer from './components/Footer';


//Import Pages //

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddGig from './pages/AddGig';
import GigGuide from './pages/GigGuide';

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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
            
              
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/signup" element={<Signup/>}></Route>
                  <Route path="/gigguide" element={<GigGuide/>}></Route>
                  <Route path="/addgig" element={<AddGig/>}></Route>
                 
              </Routes>
              <Footer />
          </Router>
      </ApolloProvider>
  )
}

export default App;
