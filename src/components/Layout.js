import Banner from "./Banner";

function Layout({ children }) {
    return (
      <div>
        <Banner />
        <main>{children}</main>
        
      </div>
    );
  }

export default Layout;
  