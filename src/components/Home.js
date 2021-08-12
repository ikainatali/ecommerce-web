import React from "react";
import CommonCard from "./CommonCard";
import homeData from "./data/HomeData";

const Home = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {homeData.map((data) => {
            return (
              <div className='col-4'>
                <CommonCard
                  key={data.id}
                  img={data.img}
                  description={data.description}
                  price={data.price}
                  link='/home'
                  category='home'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
