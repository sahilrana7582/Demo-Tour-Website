import React, { useEffect, useState } from 'react';
import { Button, Carousel, Divider, FloatButton, Typography } from 'antd';
import Nav from './Nav';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/BaseUrl';

const Home1 = () => {
  const [tours, setTours] = useState(null);

  const fetchData = async () => {
    try {
      const apiRes = await fetch(`${BASE_URL}/tours`, {
        method: 'GET',
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzQ0OGUyMzUxOWE3MzY0NGY4ZWJjOSIsImlhdCI6MTczMTQ3OTgwMSwiZXhwIjoxNzMyMzQzODAxfQ.6UQhpwRb6DhB4IHcKtXgC20q8XYpjuU8TnqG0NgasO8',
        },
      });
      const result = await apiRes.json();
      setTours(result.data.data);
    } catch (error) {
      console.error('Error fetching tour data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(tours);
  if (!tours) {
    return;
  }
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-10"></div>

      <Carousel autoplay effect="fade" speed={1500} initialSlide={4}>
        {tours.map((tour, ind) => {
          return (
            <div>
              <img
                src={`/img/tours/tour-${ind + 1}-1.jpg`}
                className=" h-screen w-full object-cover"
                alt="Home"
              />
            </div>
          );
        })}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  px-8 z-30 flex gap-16 items-center flex-col w-1/2  justify-center  h-[70%]">
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-7xl tracking-widest font-bold text-slate-200 z-auto">
            IN-<span className="text-red-400">TOURS</span>
          </h1>
          <p className="text-justify">
            Discover unforgettable travel experiences with our comprehensive
            tour guide platform. Explore destinations, book tours, and access
            valuable travel resources to make your next adventure seamless and
            exciting.
          </p>
        </div>
        <div>
          <Link to="/home">
            {' '}
            <Button
              size="large"
              ghost="true"
              className="w-[200px]"
              iconPosition="end"
              icon={<KeyboardArrowRightIcon />}
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home1;
