import Banner from "./Banner";
import Footer from "./Footer";

function Layout({ children }) {
    return (
      <div>
        <Banner />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }

export default Layout;
  