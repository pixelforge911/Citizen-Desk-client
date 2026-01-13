import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";
import District from "./components/Home/District";
import History from "./components/Home/ComplaintsHistory";
import RaiseComplaint from "./components/Complaints/RaiseComplaint";
import AdminDashboard from "./pages/AdminDashboard";
import LatestNews from "./pages/LatestNews";

function App() {
  useEffect(() => {
    // 🔥 wake server on app load (fire & forget)
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/health`)
      .then(
        console.log("server waked")
      )
      .catch(() => {});
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<District />} />
        <Route path="history" element={<History />} />
        <Route path="raise-complaint" element={<RaiseComplaint />} />
        <Route path="latest-news" element={<LatestNews />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
