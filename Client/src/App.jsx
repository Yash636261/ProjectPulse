import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/login";
import Profile from "./pages/Profile/Profile";

function App() {

  return (
    <Router basename="/" >
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>

    </Router>
  );
}

export default App;
