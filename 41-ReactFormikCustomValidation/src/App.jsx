import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignForm from './components/SignForm';
import SignUp from './pages/SignUp';
import Signup from './components/Signup';
import SignUpGoogle from './pages/SignUpGoogle';
import Forgot from './pages/Forgot';
import LogIn from './pages/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/SignUp" element={< SignUp />} />
        <Route path="/SignUpGoogle" element={<SignUpGoogle />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
