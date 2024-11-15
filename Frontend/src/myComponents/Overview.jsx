import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [tours, setTours] = useState(null);
  const fetchData = async () => {
    const apiResponse = await fetch('/devData/tours.json');
    const data = await apiResponse.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="py-20 px-10">
      <h1>This is overview</h1>
    </div>
  );
};

export default Overview;
