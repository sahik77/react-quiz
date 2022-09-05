import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="*" element={<Home></Home>} />
          <Route exact path="/home" element={<Home></Home>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/quiz" element={<Quiz></Quiz>} />
          <Route path="/result" element={<Result></Result>} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
