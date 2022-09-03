import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import SignIn from './Pages/Authentification/SignIn/SignIn'
import SignUp from './Pages/Authentification/SignUp/SignUp'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from './Utils/AuthContext';




function App() {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{user,setUser}}>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="signin" element={<SignIn />}></Route>
        <Route exact path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </AuthContext.Provider>
  );
}


export default App;
