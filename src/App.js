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
import DashlessPlus from "./pages/level-pages/DashlessPlus";
import D1D7 from "./pages/level-pages/D1D7";
import MOCE_LXVI from "./pages/level-pages/MOCE_LXVI";
import ElectionDSide from "./pages/level-pages/ElectionDSide";
import CrystalGarden from "./pages/level-pages/CrystalGarden";
import DragonfruitDemise from "./pages/level-pages/DragonfruitDemise";
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
        <Route path="/dashless-plus" element={<DashlessPlus />} />
        <Route path="/d1d7" element={<D1D7 />} />
        <Route path="/moce-lxvi" element={<MOCE_LXVI />} />
        <Route path="/election-d-side" element={<ElectionDSide />} />
        <Route path="/crystal-garden" element={<CrystalGarden />} />
        <Route path="/dragonfruit-demise" element={<DragonfruitDemise />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
