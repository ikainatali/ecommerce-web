import React from "react";
import CommonCard from "../components/CommonCard";
import homeData from "../components/data/HomeData";

const Home = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row mt-5 pt-5'>
          {homeData.map((data) => {
            return (
              <div className='col-md-4 col-10 offset-md-0 offset-1'>
                <CommonCard
                  key={data.id}
                  id={data.id}
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
