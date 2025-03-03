import { Outlet } from "react-router-dom";
import Header from "./basics/Header";
import Footer from "./basics/Footer";

const SiteWrapper: React.FC = () => {
  return (
    <>
      <Header />
      <main role="main" className="container mx-auto mt-4 mb-4">
        <Outlet /> {/* 여기서 자식 라우트 컴포넌트가 렌더링됩니다. */}
      </main>
      <Footer />
    </>
  );
};

export default SiteWrapper;
