import React from 'react';
import { Carousel } from 'antd';

const Swaper = () => (
  <Carousel arrows infinite={true} autoplay>
    <div>
      <img src="/img/tours/tour-1-1.jpg" className="h-full w-full"></img>
    </div>
    <div>
      <img src="/img/tours/tour-1-1.jpg" className="h-full w-full"></img>
    </div>
    <div>
      <img src="/img/tours/tour-1-1.jpg" className="h-full w-full"></img>
    </div>
    <div>
      <img src="/img/tours/tour-1-1.jpg" className="h-full w-full"></img>
    </div>
  </Carousel>
);

export default Swaper;
