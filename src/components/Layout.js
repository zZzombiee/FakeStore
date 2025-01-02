import Footer from "@/components/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="container mx-auto max-w-7xl">
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
