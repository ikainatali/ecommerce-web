import React from "react";

const Header = () => {
  return (
    <>
      <section>
        {/* <img src={cover} className='img-fluid' alt='...' /> */}
        <div className='container pt-5'>
          <div className='row main-row mt-5 pt-5'>
            <div className='col-6 pt-4'>
              <div className='row'>
                <div className='col-8 ms-auto gy-5'>
                  <div className='card card-hearder man p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-5 mb-5'>
                      <h4 className='title text-center text-uppercase'>Man</h4>
                      <button className='btn btn-outline-dark btn-sm'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className='w-100 d-none d-md-block'></div>
                <div className='col-6 gy-4'>
                  <div className='card card-hearder accessories p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-4 mb-4'>
                      <h4 className='title text-center text-uppercase'>
                        Accessories
                      </h4>
                      <button className='btn btn-outline-dark btn-sm'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-6 gy-4'>
                  <div className='card card-hearder woman p-4'>
                    <div className='card-body justify-content-center d-flex align-items-center flex-column mt-4 mb-4'>
                      <h4 className='title text-center text-uppercase'>
                        Woman
                      </h4>
                      <button className='btn btn-outline-dark btn-sm'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 pt-4'>
              <div className='card card-hearder home p-4'>
                <div className='card-body justify-content-center d-flex align-items-center flex-column'>
                  <h4 className='title text-center text-uppercase'>Home</h4>
                  <button className='btn btn-outline-dark btn-sm'>
                    Shop Now
                  </button>
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
