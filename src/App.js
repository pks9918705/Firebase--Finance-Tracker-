import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthContext } from './hooks/useAuthContext.js';
import Home from "./pages/Home/Home.jsx";

export default function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <Router>
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Home />} />
            <Route path="/signup" element={!user ? <Signup /> : <Home />} />
            <Route path="/" element={!user ? <Login/> : <Home />} />
          </Routes>
        </>
      )}
    </Router>
  );
}
