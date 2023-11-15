import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThreeStar, TwoStar, OneStar} from "./pages/Levels";
/* import Search from "./pages/Search"; */
import UpdateLog from "./pages/UpdateLog";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/levels/three-star" element={<ThreeStar />} />
        <Route path="/levels/two-star" element={<TwoStar />} />
        <Route path="/levels/one-star" element={<OneStar />} />
        
        <Route path="/updatelog" element={<UpdateLog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;

        /* <Route path="/levels" element={<Levels />} /> */
        /* <Route path="/search" element={<Search />} /> */