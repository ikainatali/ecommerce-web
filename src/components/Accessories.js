import React from "react";
import CommonCard from "./CommonCard";
import {
  bag,
  clutch,
  cupbottle,
  mask,
  stationary,
  others,
} from "./data/AccessoriesData";

const Accessories = () => {
  return (
    <>
      <div className='container pt-4'>
        <div className='row mt-5 pt-5'>
          <h3>Bag</h3>
          {bag.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}

          <h3>Clutch</h3>
          {clutch.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}

          <h3>Cup Bottle</h3>
          {cupbottle.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}

          <h3>Mask</h3>
          {mask.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}

          <h3>Stationary</h3>
          {stationary.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}

          <h3>Others</h3>
          {others.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  price={data.price}
                  link='/accessories'
                  category='accessories'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accessories;
