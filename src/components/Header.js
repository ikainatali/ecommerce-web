import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        {/* <img src={cover} className='img-fluid' alt='...' /> */}
        <div className='container pt-md-5'>
          <div className='row main-row mt-5 pt-5'>
            <div className='col-md-6 col-12 pt-4'>
              <div className='row'>
                <div className='col-8 ms-auto gy-5'>
                  <div className='card card-hearder woman p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-4 mb-4'>
                      <h4 className='title text-center text-uppercase'>
                        Woman
                      </h4>
                      <NavLink exact to='/woman'>
                        <button className='btn btn-outline-dark btn-sm'>
                          Shop Now
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* <div className='w-100 d-none d-md-block'></div> */}
                <div className='col-md-6 col-8 offset-md-0 offset-2 gy-4 order-md-0 order-1'>
                  <div className='card card-hearder accessories p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-4 mb-4'>
                      <h4 className='title text-center text-uppercase'>
                        Accessories
                      </h4>
                      <NavLink exact to='/accessories'>
                        <button className='btn btn-outline-dark btn-sm'>
                          Shop Now
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-12 gy-4'>
                  <div className='card card-hearder man p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-5 mb-5'>
                      <h4 className='title text-center text-uppercase'>Man</h4>
                      <NavLink exact to='/man'>
                        <button className='btn btn-outline-dark btn-sm'>
                          Shop Now
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-12 pt-4'>
              <div className='card card-hearder home p-4'>
                <div className='card-body justify-content-center d-flex align-items-center flex-column'>
                  <h4 className='title text-center text-uppercase'>Home</h4>
                  <NavLink exact to='/home'>
                    <button className='btn btn-outline-dark btn-sm'>
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
