import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import BeerLink from './pages/BeerLink';
import Header from "./components/Header"
import BeerDetails from './pages/BeerDetails';
import { useState } from 'react';

function App() {
   
  const location = useLocation();
  const onHomePage = location.pathname === "/"
  console.log(onHomePage);
  return (
    <div className="App">
    {!onHomePage && <Header />}
    <Routes >
      <Route path="/" element={ <Home />}/>
      <Route path="/beers" element={<BeerLink />} />
      <Route path="/beer-details/:id" element={<BeerDetails />}/>
    </Routes>
    </div>
  );
}

export default App;
