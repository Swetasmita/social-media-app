import React from "react";

const Footer = () => {
  return (   
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top text-bg-dark">
        <p className="col-md-4 mb-0 text-body-white">© 2025 Company, Inc</p>     
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-white">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-white">
              About
            </a>
          </li>
        </ul>
      </footer>    
  );
};

export default Footer;
