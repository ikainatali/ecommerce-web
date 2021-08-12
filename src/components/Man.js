import React from "react";
import CommonCard from "./CommonCard";
import manData from "./data/ManData";

const Man = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {manData.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  description={data.description}
                  price={data.price}
                  link='/man'
                  category='man'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Man;
