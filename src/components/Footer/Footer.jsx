function Footer() {
  return (
    <footer className="py-5" style={{ background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)', color: 'white' }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {/*  footr */}
          <div className="col-12 col-md-2 mb-3">
            <h5>Ahmed Abdulla</h5>
            <ul className="nav" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="/" className="nav-link p-0 text-white">Home</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://www.linkedin.com/in/ahmed-abdulla-amralla/" target="_blank" className="nav-link p-0 text-white">Linkedin</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://github.com/Ahmedi7a?tab=repositories" target="_blank" className="nav-link p-0 text-white">GitHub</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://www.linkedin.com/in/ahmed-abdulla-amralla/" target="_blank" className="nav-link p-0 text-white">About</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-3">
            <h5>Lataafa Aladoseri</h5>
            <ul className="nav" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="/"  className="nav-link p-0 text-white">Home</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://linkedin.com/in/lateefa-aldoseri" target="_blank" className="nav-link p-0 text-white">Linkedin</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://github.com/LATEEFA369" target="_blank" className="nav-link p-0 text-white">GitHub</a>
              </li>
              <li className="nav-item mb-2" style={{ marginRight: '15px' }}>
                <a href="https://linkedin.com/in/lateefa-aldoseri" target="_blank" className="nav-link p-0 text-white">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
