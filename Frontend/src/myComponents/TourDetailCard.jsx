import { Button, Card, Carousel, Divider } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import Ma from './Ma';

const TourDetailCard = ({ tour }) => {
  return (
    <div className="">
      <div className="w-full max-h-1/2 mx-auto">
        <Card>
          <Carousel
            autoplay
            effect="fade"
            infinite:true
            speed={1000}
            className="mb-4"
          >
            {tour.images.map((img, ind) => (
              <div key={ind}>
                <img
                  src={`/img/tours/${img}`}
                  className="w-full h-full object-cover" // Ensures the image fills the container properly
                  alt={`Carousel Image ${ind}`}
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-center">{tour.name}</h1>
            <Divider />
            <div className="flex justify-evenly">
              <div>
                <h1 className="text-xl font-semibold my-4 text-center">
                  Tour Guides
                </h1>
                <div className="flex flex-col gap-8">
                  {tour.guides.map((guide, ind) => {
                    return (
                      <div className="flex items-center gap-10">
                        <img
                          src={`/img/users/${guide.photo}`}
                          className="w-14 rounded-full"
                        ></img>
                        <div>
                          <h2 className="text-base font-semibold uppercase underline">
                            {guide.role}
                          </h2>
                          <h2>{guide.name}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Divider type="vertical" className="h-full" />
              <div className="w-1/2">
                <p className="text-l font-semibold">{tour.description}</p>
                <Divider />
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </div>
          <Divider />
        </Card>
        <Divider />
        <div>
          <Ma />
        </div>
      </div>
    </div>
  );
};

export default TourDetailCard;
