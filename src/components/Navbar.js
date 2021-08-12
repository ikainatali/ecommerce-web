import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                <NavLink to='/woman'>Woman</NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/man'>Man</NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/winter'>Winter</NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/home'>Home</NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/accessories'>Accessories</NavLink>
              </li>
              {/* <li className='nav-item dropdown p-2'>
                <NavLink
                  to='/accessories'
                  className='nav-link dropdown-toggle'
                  id='navbarDarkDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Accessories
                </NavLink>
                <ul
                  className='dropdown-menu dropdown-menu-dark'
                  aria-labelledby='navbarDarkDropdownMenuLink'
                >
                  <div className='d-flex'>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Bag
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Clutch
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Cup/Bottle
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Mask
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Stationary
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-item' to='/'>
                        Others
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </li> */}
              <li className='nav-item p-3'>
                <NavLink to='/'>
                  <i className='fas fa-user'></i>
                </NavLink>
              </li>
              <li className='nav-item p-3'>
                <NavLink to='/cart'>
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
