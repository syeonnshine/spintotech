import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Overview from "./pages/company/Overview";
// 연혁은 자료 확정 전까지 비공개 — 기존 주소로 들어오면 회사개요로 보냄 (페이지·데이터 파일은 보존)
// import History from "./pages/company/History";
import ComingSoon from "./components/ComingSoon";
// 내용 검토 전까지 준비중 화면으로 대체 — 오픈 시 아래 import와 라우트 element를 되돌리면 됨
// import Business from "./pages/Business";
// import Products from "./pages/Products";
// import Performance from "./pages/performance/Performance";
// import Clients from "./pages/performance/Clients";

// 페이지 전환 시 스크롤 위치를 맨 위로 복원
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Cloudflare Pages는 404.html이 없으면 모든 경로를 index.html로 돌려줘서 BrowserRouter로도 새로고침 404가 나지 않음
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        {/* main도 flex column으로 둬서, 내용이 짧은 페이지(현재 메인)는 자식이 남은 높이를 채울 수 있게 함 */}
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/overview" element={<Overview />} />
            <Route path="/company/history" element={<Navigate to="/company/overview" replace />} />
            <Route path="/business" element={<ComingSoon title="사업분야" />} />
            <Route path="/products" element={<ComingSoon title="제품소개" />} />
            <Route path="/support" element={<ComingSoon title="고객지원" />} />
            {/* 실적·고객사는 메뉴에서 빠짐 — 예전 주소로 들어오면 고객지원으로 보냄 */}
            <Route path="/performance/*" element={<Navigate to="/support" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
