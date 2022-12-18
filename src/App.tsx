import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}>Home</Route>
        <Route path="/Todo" element={<TodoPage/>}>Todo</Route>
      </Routes>
    </div>
  );
}

export default App;
