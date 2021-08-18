import React from "react";
import CommonCard from "../components/CommonCard";
import manData from "../components/data/ManData";

const Man = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {manData.map((data) => {
            return (
              <div className='col-md-4 col-10 offset-md-0 offset-1'>
                <CommonCard
                  key={data.id}
                  id={data.id}
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
