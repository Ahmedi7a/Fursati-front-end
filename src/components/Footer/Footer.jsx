
function Footer() {
  return (
    <footer className="py-5" style={{ background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">About</a>
              </li>
            </ul>
          </div>
          {/* Add other sections or content if needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
