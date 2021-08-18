import React from "react";
import { NavLink } from "react-router-dom";

//img
import img1 from "../img/discover/1.jpg";
import img2 from "../img/discover/2.jpg";

const Discover = () => {
  return (
    <>
      <section>
        <div className='container mt-5 mb-5 pt-5'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='text-center text-uppercase'>Discover More</h2>
              <div className='row mt-5 pt-4 ms-1'>
                <div className='col-md-4 col-6 p-md-4'>
                  <div className='card'>
                    <NavLink exact to='/'>
                      <img src={img1} className='card-img-top' alt='...' />
                    </NavLink>
                    <div className='card-body pb-0 trending'>
                      <h6 className='card-title text-uppercase text-center'>
                        <NavLink exact to='/'>
                          Trending
                        </NavLink>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-6 p-md-4'>
                  <div className='card'>
                    <NavLink exact to='/'>
                      <img src={img2} className='card-img-top' alt='...' />
                    </NavLink>
                    <div className='card-body pb-0 trending'>
                      <h6 className='card-title text-uppercase text-center'>
                        <NavLink exact to='/'>
                          Trending
                        </NavLink>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-12 p-5'>
                  <form className='d-flex flex-column pt-5'>
                    <h4 className='pt-3 text-md-start text-center'>
                      Newsletter Signup
                    </h4>
                    <p className='pt-4 text-sm text-md-start text-center'>
                      Subscribe to our Newsletter for Exclusive Updates
                    </p>
                    <div className='input-group pt-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter your email address'
                        aria-describedby='button-addon2'
                      />
                      <button
                        className='btn btn-dark btn-sm'
                        type='button'
                        id='button-addon2'
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
