import React from "react";

const Cart = ({ count, addCartItems }) => {
  return (
    <>
      <div>
        <div
          className='modal fade'
          id={`exampleModal2${addCartItems.map((item) => item.id)}`}
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
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Product</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Quantity</th>
                          <th scope='col'>Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        {addCartItems.map((cartItems) => {
                          return (
                            <tr>
                              <td className='col-2 offset-1'>
                                <img
                                  src={cartItems.img}
                                  className='img-fluid'
                                  alt='...'
                                />
                              </td>

                              <td className='col-3 ms-auto'>
                                ${cartItems.price}
                              </td>
                              <td className='col-3'>{count}</td>
                              <td className='col-3'>
                                ${cartItems.price * count}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className='modal-footer border-0'>
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
      </div>
    </>
  );
};

export default Cart;
