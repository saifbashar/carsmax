import React from 'react';
import Banner from '../Banner/Banner';
import ReviewSection from '../ReviewSection/ReviewSection';
import ShopType from '../ShopType/ShopType';
// import HomeCars from '../HomeCars/HomeCars';
import HomeCars from '../HomeCars/HomeCars';
import NewsForm from '../NewsForm/NewsForm';
import Trending from '../Trending/Trending';

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <ShopType></ShopType>
      <br />
      <HomeCars></HomeCars>
      <br />
      <ReviewSection />
      <br />
      <Trending></Trending>
      <br />
      <NewsForm></NewsForm>
    </div>
  );
};

export default Home;
