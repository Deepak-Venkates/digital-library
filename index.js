import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from './components/home.js';
import About from './components/about.js';
import Adduser from './adduser';
import Edituser from './edituser';
import Cs from './departments/cs';
import PageNotFound from './components/pagenotfound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dept from './departments/dept';
import Login from './login';
import CreatePassword from './forgetpassword';
import UserManagement from './user';
import ChangePassword from "./changepassword";
import It from './departments/it';
import Bca from './departments/bca';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/adduser' element={<Adduser />} />
        <Route path='/forgetpassword' element={<CreatePassword />} />
        <Route element={<App />}>
        <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:id' element={<UserManagement/>} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/edituser/:id' element={<Edituser />} />
          <Route path='/departments/dept' element={<Dept />} />
          <Route path='/departments/cs' element={<Cs />} />
          <Route path='/departments/bca' element={<Bca />} />
          <Route path='/departments/it' element={<It />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

