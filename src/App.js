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
import SJPassionFruitPantheon from "./pages/level-pages/SJPassionFruitPantheon";
import CMgv from "./pages/level-pages/CMgv";
import HorrorVacui from "./pages/level-pages/HorrorVacui";
import FulFilledEmptiness from "./pages/level-pages/FulFilledEmptiness";
import MagneticDawnB from "./pages/level-pages/MagneticDawnB";
import FBGV from "./pages/level-pages/FBGV";
import SD1DO from "./pages/level-pages/SD1DO";
import TheBigReveal from "./pages/level-pages/TheBigReveal";
import ForsakenUndercity from "./pages/level-pages/ForsakenUndercity";
import Haaai from "./pages/level-pages/Haaai";
import Mauve from "./pages/level-pages/Mauve";
import MoonOfTheUltras from "./pages/level-pages/MoonOfTheUltras";
import PaleViolet from "./pages/level-pages/PaleViolet";
import PinballPurgatory from "./pages/level-pages/PinballPurgatory";
import Ridge from "./pages/level-pages/Ridge";
import SapphireDash from "./pages/level-pages/SapphireDash";
import SBWW from "./pages/level-pages/SBWW";
import Serotonin from "./pages/level-pages/Serotonin";
import TheSolarExpress from "./pages/level-pages/TheSolarExpress";
import SWAPSLUT from "./pages/level-pages/SWAPSLUT";
import TempleOfBounceleste from "./pages/level-pages/TempleOfBounceleste";
import VividAbyss from "./pages/level-pages/VividAbyss";
import DarkmoonRuins from "./pages/level-pages/DarkmoonRuins";
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
          element={<SJPassionFruitPantheon />}
        />
        <Route path="/cgmv" element={<CMgv />} />
        <Route path="/horror-vacui" element={<HorrorVacui />} />
        <Route
          path="/11871-fulfilled-emptiness"
          element={<FulFilledEmptiness />}
        />
        <Route path="/magnetic-dawn-b" element={<MagneticDawnB />} />
        <Route path="/5bgv" element={<FBGV />} />
        <Route path="/7d1do" element={<SD1DO />} />
        <Route path="/the-big-reveal" element={<TheBigReveal />} />
        <Route path="/forsaken-undercity" element={<ForsakenUndercity />} />
        <Route path="/haaai" element={<Haaai />} />
        <Route path="/mauve" element={<Mauve />} />
        <Route path="/moon-of-the-ultras" element={<MoonOfTheUltras />} />
        <Route path="/pale-violet" element={<PaleViolet />} />
        <Route path="/sj-pinball-purgatory" element={<PinballPurgatory />} />
        <Route path="/ridge" element={<Ridge />} />
        <Route path="/sapphire-dash" element={<SapphireDash />} />
        <Route path="/sbww" element={<SBWW />} />
        <Route path="/serotonin" element={<Serotonin />} />
        <Route path="/the-solar-express" element={<TheSolarExpress />} />
        <Route path="/swapslut" element={<SWAPSLUT />} />
        <Route
          path="/temple-of-bounceleste"
          element={<TempleOfBounceleste />}
        />
        <Route path="/vivid-abyss" element={<VividAbyss />} />
        <Route path="/darkmoon-ruins" element={<DarkmoonRuins />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
