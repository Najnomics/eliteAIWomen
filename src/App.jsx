import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import NineCare from "./pages/NineCare";

const RouteFooter = () => {
  const { pathname } = useLocation();
  const showFooter = pathname.replace(/\/+$/, "") !== "/9care-ai";

  if (!showFooter) return null;

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/9care-ai" element={<NineCare />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>

      <RouteFooter />
    </Router>
  );
};

export default App;
