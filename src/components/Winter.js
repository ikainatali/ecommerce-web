import React from "react";
import CommonCard from "./CommonCard";
import winterData from "./data/WinterData";

const Winter = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {winterData.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  description={data.description}
                  price={data.price}
                  link='/winter'
                  category='winter'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Winter;
