import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fdairy-farm&psig=AOvVaw3EArMvKef203d-yaX7wrln&ust=1684932414139000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiv7cG8i_8CFQAAAAAdAAAAABAE)',
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          No middleman here!
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Our farm-fresh milk is delivered straight to your door for the
          freshest taste possible!
          <br /> With our direct-to-consumer model, you can enjoy the
          convenience of having pure, wholesome milk without any unnecessary
          delays or handling.
          <br /> ur cows grazing in lush pastures to your breakfast table,
          experience the unparalleled freshness that sets us apart. <br />
          Say goodbye to the middleman and savor the true essence of
          farm-to-door milk delivery.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Order Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
