import React from "react";
import { useState } from "react";

//component
import Cart from "./Cart";

const Item = ({ id, img, description, price }) => {
  const [count, setCount] = useState(0);
  const [addCartItems, setAddCartItems] = useState([]);

  const addCartItem = (id, img, description, price) => {
    setAddCartItems([
      ...addCartItems,
      {
        id,
        img,
        description,
        price,
      },
    ]);
  };
  return (
    <>
      <div
        className='modal fade'
        id={`exampleModal1${id}`}
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-scrollable modal-lg'>
          <div className='modal-content'>
            <div className='modal-header border-0'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            <div className='modal-body'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-7'>
                    <img src={img} className='img-fluid' alt='...' />
                  </div>
                  <div className='col-md-5'>
                    <h1>Basic {description}</h1>
                    <h4>${price}</h4>
                    <h4 className='mt-5 text-uppercase'>Size</h4>
                    <div className='input-group'>
                      <button
                        className='btn btn-outline-secondary btn-sm'
                        type='button'
                      >
                        Small
                      </button>
                      <button
                        className='btn btn-outline-secondary btn-sm'
                        type='button'
                      >
                        Medium
                      </button>
                      <button
                        className='btn btn-outline-secondary btn-sm'
                        type='button'
                      >
                        Large
                      </button>
                      <button
                        className='btn btn-outline-secondary btn-sm'
                        type='button'
                      >
                        Extra Large
                      </button>
                    </div>

                    <div className='mt-5'>
                      <h4 className='text-uppercase'>Quantity</h4>
                      <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic example'
                      >
                        <input
                          type='button'
                          className='btn btn-outline-secondary btn-sm ps-3 pe-3'
                          value='-'
                          onClick={() => setCount(count - 1)}
                        />
                        <input
                          type='button'
                          className='btn btn-outline-secondary btn-sm ps-4 pe-4'
                          value={count}
                        />

                        <input
                          type='button'
                          className='btn btn-outline-secondary btn-sm ps-3 pe-3'
                          value='+'
                          onClick={() => setCount(count + 1)}
                        />
                      </div>
                    </div>

                    <button
                      className='btn btn-dark text-uppercase mt-5'
                      onClick={() => addCartItem(id, img, description, price)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer border-0'>
              <button
                type='button'
                className='btn btn-dark'
                data-bs-toggle='modal'
                data-bs-target={`#exampleModal2${id}`}
              >
                View Cart
              </button>
              <Cart count={count} addCartItems={addCartItems} />
              <button
                type='button'
                className='btn btn-dark'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
