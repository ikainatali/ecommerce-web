import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className='pt-5'>
        <div className='container-fluid bg-dark'>
          <div className='row row-dark pt-5 pb-4'>
            <div className='col-4 text-center'>
              <p className='heading'>Information</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Store Locator</p>
            </div>

            <div className='col-4  text-center'>
              <p className='heading'>Customer Care</p>
              <p>Exchange & Return</p>
              <p>FAQs</p>
            </div>

            <div className='col-4  text-center'>
              <p className='heading'>Social</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 ps-5'>
              <p>Copywrite &copy; 2021. All rights reserved</p>
            </div>
            <div className='col-6 text-end pe-5'>
              <NavLink exact to='/' className='p-4'>
                <i className='fab fa-facebook-f'></i>
              </NavLink>
              <NavLink exact to='/' className='p-4'>
                <i className='fab fa-instagram'></i>
              </NavLink>
              <NavLink exact to='/' className='p-4'>
                <i className='fab fa-twitter'></i>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
