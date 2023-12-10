import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import SignForm from './components/signForm';
import TableMain from './components/table';
import Layout from './pages/Layout';
import Requests from './pages/Requests';
import Friends from "./pages/Friends"
import Block from "./pages/Block"
import axios from 'axios'

function App() {
  const [isadmin, setisadmin] = useState(false);//"false" gives admin to everyone
  const [isLogged, setisLogged] = useState(false);
  const [check, setCheck] = useState(false);
  const [User, setUser] = useState([]);
  // const [user, setuser] = useState([]);
  useEffect(() => {
    let loginId = localStorage.getItem("loginId")
    loginId && axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
      setUser(res.data)
    })
    setisLogged(loginId)
  }, []);
  if (isLogged) {
    return (
      <Router>
        <Routes>
          <Route index element={<TableMain isadmin={isadmin} User={User} />} />
          <Route element={<Layout />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Block" element={<Block />} />
          <Route
            path="/login"
            element={<LoginForm setisLogged={setisLogged} setisadmin={setisadmin} />}
          />
          <Route
            path="/sign-up"
            element={<SignForm setisLogged={setisLogged} setisadmin={setisadmin} />}
          />
        </Routes>
      </Router>
    );
  } else {
    if (!check) {
      return <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} setisadmin={setisadmin} isadmin={isadmin} />;
    } else {
      return <SignForm setCheck={setCheck} />;
    }
  }
}

export default App;