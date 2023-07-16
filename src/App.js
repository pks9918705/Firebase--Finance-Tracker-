

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup  from "./pages/Signup/Signup.jsx"
import Login  from "./pages/Login/Login.jsx"
import Navbar from "./components/Navbar.jsx"
export default function App() {
  return (
    
    <Router>
      <Navbar/>
     

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element= {<Signup/>} />
      </Routes>
    </Router>
  );
  }






