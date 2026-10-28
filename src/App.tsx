import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Overview from "./pages/company/Overview";
import History from "./pages/company/History";
import Business from "./pages/Business";
import Products from "./pages/Products";
import Performance from "./pages/performance/Performance";
import Clients from "./pages/performance/Clients";

// 페이지 전환 시 스크롤 위치를 맨 위로 복원
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// GitHub Pages는 SPA 경로 fallback이 없어 /company/overview 새로고침 시 404 → 서버 설정이 필요 없는 HashRouter 사용
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/overview" element={<Overview />} />
            <Route path="/company/history" element={<History />} />
            <Route path="/business" element={<Business />} />
            <Route path="/products" element={<Products />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/performance/clients" element={<Clients />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
