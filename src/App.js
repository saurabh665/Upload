import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileList from './components/FileList';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/files" element={<FileList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  );
};

export default App;
