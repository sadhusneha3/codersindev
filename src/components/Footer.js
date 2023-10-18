function Footer() {
  return (
    // Your responsive footer JSX here
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        <p>Contact us at: contact@yourcompany.com</p>
      </div>
    </footer>
  );
}

export default Footer;

