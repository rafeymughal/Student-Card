import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/students/Search";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./pages/Signup";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
