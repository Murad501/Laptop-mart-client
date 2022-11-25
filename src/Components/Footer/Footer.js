import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-10 p-10 border-t">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="text-2xl text-primary"></FaTwitter>
            </Link>
            <Link>
              <FaYoutube className="text-2xl text-primary"></FaYoutube>
            </Link>
            <Link>
              <FaFacebook className="text-2xl text-primary"></FaFacebook>
            </Link>
          </div>
        </div>
      </footer>
      <div className="py-5 text-center">
        <p>Copyright © 2022 - All right reserved by Laptop Mart</p>
      </div>
    </div>
  );
};

export default Footer;
