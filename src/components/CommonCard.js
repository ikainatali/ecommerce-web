import React from "react";
import { NavLink } from "react-router-dom";

//comopment
import Item from "../pages/Item";

const CommonCard = ({ id, img, description, price, category, link }) => {
  return (
    <>
      <div className='card border-0 mt-4'>
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body pb-5'>
          <div className='d-flex flex-row'>
            <h6 className='card-title price'>${price}</h6>
            <h6 className='card-title description ms-auto'>{description}</h6>
            {category === "accessories" ? (
              ""
            ) : category === "home" ? (
              ""
            ) : (
              <p className='ps-2'>
                <span className='size p-1 me-2'>S</span>
                <span className='size p-1 me-2'>M</span>
                <span className='size p-1 me-2'>L</span>
                <span className='size p-1 me-2'>XL</span>
              </p>
            )}
          </div>
          <NavLink exact to={link}>
            <button
              className='btn btn-dark btn-sm ms-auto'
              data-bs-toggle='modal'
              data-bs-target={`#exampleModal1${id}`}
            >
              View Detail
            </button>
          </NavLink>
          <Item id={id} img={img} description={description} price={price} />
        </div>
      </div>
    </>
  );
};

export default CommonCard;
