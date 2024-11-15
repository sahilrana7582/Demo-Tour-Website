import React from 'react';
import { tourData } from '../../public/devData/tours';
import Tourcard from './Tourcard';

const TourList = ({ currPage }) => {
  const toursPerPage = 3;

  // Calculate the starting and ending index for the current page
  const startIndex = (currPage - 1) * toursPerPage;
  const endIndex = startIndex + toursPerPage;

  // Slice the tour data for the current page
  const currentTours = tourData.slice(startIndex, endIndex);

  return (
    <>
      {currentTours.map((tour, ind) => (
        <Tourcard tour={tour} key={ind} />
      ))}
    </>
  );
};

export default TourList;
