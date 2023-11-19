import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Messages from "./pages/messages/Messages";
import Profile from "./pages/profile/Profile";
import Reels from "./pages/reels/Reels";
import { Navbar } from "./components/index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </Router>
  );
};

export default App;
