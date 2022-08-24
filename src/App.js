import './App.css';
import Home from './Pages/Home/Home'
import SignIn from './Pages/Authentification/SignIn/SignIn'
import SignUp from './Pages/Authentification/SignUp/SignUp'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="signin" element={<SignIn />}></Route>
        <Route exact path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
    // <div className="App">
    //   {/* <Home /> */}
    //   {/* <SignIn /> */}
    //   <SignUp />
    // </div>
  );
}


export default App;
