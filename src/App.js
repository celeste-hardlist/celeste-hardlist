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
import AvianAscension from "./pages/level-pages/AvianAscension";
import MatureGrapePlus from "./pages/level-pages/MatureGrapePlus";
import LPL_GDDH from "./pages/level-pages/LPL_GDDH";
import TheSource from "./pages/level-pages/TheSource";
import ShatterSite from "./pages/level-pages/ShatterSite";
import MOCE_CPVL from "./pages/level-pages/MOCE_CPVL";
import SJ_PassionFruitPantheon from "./pages/level-pages/SJ_PassionFruitPantheon";
import CMgv from "./pages/level-pages/CMgv";
import HorrorVacui from "./pages/level-pages/HorrorVacui";
import FulFilledEmptiness from "./pages/level-pages/FulFilledEmptiness";
import MagneticDawnB from "./pages/level-pages/MagneticDawnB";
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
        <Route path="/election-d" element={<ElectionDSide />} />
        <Route path="/crystal-garden" element={<CrystalGarden />} />
        <Route path="/dragonfruit-demise" element={<DragonfruitDemise />} />
        <Route path="/avian-ascension" element={<AvianAscension />} />
        <Route path="/mature-grape-plus" element={<MatureGrapePlus />} />
        <Route path="/lpl-gddh" element={<LPL_GDDH />} />
        <Route path="/the-source" element={<TheSource />} />
        <Route path="/shatter-site" element={<ShatterSite />} />
        <Route path="/moce-cpvl" element={<MOCE_CPVL />} />
        <Route
          path="/sj-passionfruit-pantheon"
          element={<SJ_PassionFruitPantheon />}
        />
        <Route path="/cgmv" element={<CMgv />} />
        <Route path="/horror-vacui" element={<HorrorVacui />} />
        <Route
          path="/11871-fulfilled-emptiness"
          element={<FulFilledEmptiness />}
        />
        <Route path="/magnetic-dawn-b" element={<MagneticDawnB />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
