import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./page/Login";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
