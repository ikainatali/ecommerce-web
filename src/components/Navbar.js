import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach((a) => {
    a.addEventListener("click", () => {
      navCollapse.classList.remove("show");
    });
  });
  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top navbar-light shadow-sm p-3 mb-4 mb-3'>
        <div className='container'>
          <NavLink to='/' className='navbar-brand'>
            Sticker Store
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item p-3'>
                <NavLink to='/woman' className='nav-link'>
                  Woman
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/man' className='nav-link'>
                  Man
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/winter' className='nav-link'>
                  Winter
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/home' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/accessories' className='nav-link'>
                  Accessories
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/' className='nav-link'>
                  <i className='fas fa-user'></i>
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/cart' className='nav-link'>
                  <i className='fas fa-shopping-bag'></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
