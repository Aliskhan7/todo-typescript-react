import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {

  return (
     <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route element={<TodosPage/>} path="/"></Route>
          <Route element={<AboutPage/>} path="/about"></Route>
        </Routes>
      </div>
     </>
  );
}

export default App;
