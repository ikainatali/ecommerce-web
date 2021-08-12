import React from "react";
import CommonCard from "./CommonCard";
import womanData from "./data/WomanData";

const Woman = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {womanData.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  description={data.description}
                  price={data.price}
                  link='/woman'
                  category='woman'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Woman;
