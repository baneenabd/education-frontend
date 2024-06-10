import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import WhoAreWe from "./components/WhoAreWe";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />

        <Route path="/WhoAreWe" element={<WhoAreWe />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
