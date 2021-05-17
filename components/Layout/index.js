import Nav from "../Nav";
import Footer from '../Footer';

const Layout = ({ children, categories }) => (
  <>
    <Nav />
    {children}
    <Footer categories={categories} />
  </>
);

export default Layout;