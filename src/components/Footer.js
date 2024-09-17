const Footer = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto footer p-10">
      <nav className="flex flex-col">
        <h1 className="footer-title">SERVICES</h1>
        <a>Branding</a>
        <a>Design</a>
        <a>Marketing</a>
        <a>Advertisement</a>
      </nav>
      <nav className="flex flex-col">
        <h1 className="footer-title">COMPANY</h1>
        <a>About us</a>
        <a>Contact</a>
        <a>Jobs</a>
        <a>Press kit</a>
      </nav>
      <nav className="flex flex-col">
        <h1 className="footer-title">LEGAL</h1>
        <a>Terms of use</a>
        <a>Privacy policy</a>
        <a>Cookie policy</a>
      </nav>
    </div>
  );
};
export default Footer;
