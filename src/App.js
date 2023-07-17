import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from "./pages/Signup/Signup.jsx"
import Login from "./pages/Login/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import { useAuthContext } from './hooks/useAuthContext.js';

export default function App() {

  const { authIsReady } = useAuthContext()
  return (
    <Router>
      {authIsReady && <>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </>}
    </Router>
  );
}






