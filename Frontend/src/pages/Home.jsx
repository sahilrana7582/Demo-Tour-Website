import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

import SearchHome from '../myComponents/SearchHome';
import ServiceList from '../myComponents/ServiceList';
import { Button, Divider, Pagination } from 'antd';
import TourList from '../myComponents/TourList';

const Home = () => {
  const [currPage, setCurrPage] = useState(1);
  console.log(currPage);
  return (
    <>
      <div className="p-10 ">
        <div className="h-fi flex justify-between items-center m-6">
          <section className="w-1/3 flex flex-col gap-6">
            <h1 className="text-4xl font-semibold">
              Traveling opens the doors <br /> to creating{' '}
              <span className="text-green-500">memories</span>
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nihil architecto eos rerum cumque? Illum est quod iste tempora
              quidem? Harum, perspiciatis. Harum ducimus vero ex nihil ipsa hic
              obcaecati architecto, qui quae vel, libero sit facilis similique.
              Cupiditate, adipisci unde ipsam animi esse labore.
            </p>
          </section>

          <section className="w-1/2 flex gap-6">
            <div className="mt-4">
              <img
                src="/Home.jpg"
                className="h-[400px] w-60 rounded-xl object-cover"
              ></img>
            </div>
            <div className="mt-12">
              <img
                src="/img/tours/tour-2-1.jpg"
                className="h-[400px] w-60 rounded-xl object-cover"
              ></img>
            </div>
            <div className="mt-36">
              <img
                src="/img/tours/tour-9-1.jpg"
                className="h-[400px] w-60 rounded-xl object-cover"
              ></img>
            </div>
          </section>
        </div>
        <div className="w-full border-b m-6"></div>
        <div className="m-6">
          <div className="flex justify-center">
            <SearchHome />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-semibold">Our Featured Tours</h1>
          </div>
          <div>
            <Button>Flters</Button>
          </div>
        </div>
        <Divider />

        <div className="flex justify-evenly gap-10 mt-10">
          <TourList currPage={currPage} />
        </div>

        <div className="flex justify-center m-6">
          <Pagination
            defaultCurrent={1}
            total={30}
            onChange={(e) => {
              setCurrPage((prev) => e);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
