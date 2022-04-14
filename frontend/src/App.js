import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { store } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/*" element={<Error />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
