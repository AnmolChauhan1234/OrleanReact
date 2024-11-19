import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h5 className="text-uppercase">Healthcare Dashboard</h5>
            <p>&copy; 2024 Healthcare Dashboard. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
