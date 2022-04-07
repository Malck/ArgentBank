import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header" ;
import Footer from "./components/Footer/Footer" ;
import Error from "./pages/Error/Error"

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}/>
        
        <Route path="/*" element={<Error />}/>
          
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
