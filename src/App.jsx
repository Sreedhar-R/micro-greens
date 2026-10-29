import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Harvest from './pages/Harvest';
import HarvestDetail from './pages/HarvestDetail';
import Garden from './pages/Garden';
import Nourish from './pages/Nourish';
import Wellness from './pages/Wellness';
import Roots from './pages/Roots';
import Seeds from './pages/Seeds';
import Connect from './pages/Connect';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harvest" element={<Harvest />} />
          <Route path="/harvest/:slug" element={<HarvestDetail />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/nourish" element={<Nourish />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/roots" element={<Roots />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
