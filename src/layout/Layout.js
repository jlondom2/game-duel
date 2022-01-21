// components
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Top from "../components/Top";

const Layout = ({ children }) => {
  return (
    <>
    <Top />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
