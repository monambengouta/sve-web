import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import SignIn from './Pages/Authentification/SignIn/SignIn'
import SignUp from './Pages/Authentification/SignUp/SignUp'
import AboutUs from './Pages/AboutUs/AboutUs';
import NosServices from './Pages/NosServices/NosServices';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';  
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
        <Route exact path="aboutus" element={<AboutUs />}></Route>
        <Route exact path="nosservices" element={<NosServices />}>
        <Route exact path="ichkili" element={<ServiceDetail index={1}/>} />
        <Route exact path="ejrili"  element={<ServiceDetail index={2} />} />
        <Route exact path="bloquih" element={<ServiceDetail index={0} />} />
        <Route path="*" element={<ServiceDetail index={1}/>} />
        </Route>
        <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </AuthContext.Provider>
  );
}


export default App;
