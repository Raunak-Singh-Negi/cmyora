import SideMenu from "./SideMenu";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <div className="site-layout">
      <SideMenu />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;