import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { ABOUT_PATH, DONATE_PATH, LINKS_PATH } from './constants';
import About from './pages/about';
import Donate from './pages/donate';
import Links from './pages/links';

export default function App() {
  const { pathname } = useLocation();

  // Start each page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path={ABOUT_PATH} element={<About />} />
      <Route path={LINKS_PATH} element={<Links />} />
      <Route path={DONATE_PATH} element={<Donate />} />
      <Route path="*" element={<Navigate to={ABOUT_PATH} replace />} />
    </Routes>
  );
}
