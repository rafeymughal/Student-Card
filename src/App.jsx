import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./components/students/Search";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
