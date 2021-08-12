import React from "react";
import { NavLink } from "react-router-dom";

const CommonCard = ({ img, description, price, link, category }) => {
  return (
    <>
      <div className='card border-0 mt-4'>
        <NavLink exact to={link}>
          <img src={img} className='card-img-top' alt='...' />
        </NavLink>
        <div className='card-body d-flex pb-5'>
          <h6 className='card-title'>{description}</h6>
          <h6 className='card-title'>${price}</h6>
          {category === "accessories" ? (
            ""
          ) : category === "home" ? (
            ""
          ) : (
            <p className='ms-auto'>
              <span className='size p-1 me-2'>S</span>
              <span className='size p-1 me-2'>M</span>
              <span className='size p-1 me-2'>L</span>
              <span className='size p-1 me-2'>XL</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CommonCard;
