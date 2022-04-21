import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import { SignUp } from './components/SignUpForm';
import {Login} from'./components/LoginForm';
import { Dashboard } from './components/Dashboard';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="signupform" element={<SignUp />} />
      <Route path="loginform" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>

    </>
   );
  }
export default App;