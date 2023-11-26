import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ThreeStar from "./pages/ThreeStar";
import TwoStar from "./pages/TwoStar";
import OneStar from "./pages/OneStar";
import UpdateLog from "./pages/UpdateLog";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/three-star" element={<ThreeStar />} />
        <Route path="/two-star" element={<TwoStar />} />
        <Route path="/one-star" element={<OneStar />} />
        <Route path="/updatelog" element={<UpdateLog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashless-plus" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
