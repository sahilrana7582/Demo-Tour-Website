import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/BaseUrl';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { Divider, Progress } from 'antd';
import Tourcard from '../myComponents/Tourcard';
import Payment from '../myComponents/Payment';
import TourDetailCard from '../myComponents/TourDetailCard';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTourData] = useState(null);

  const fetchData = async () => {
    try {
      const apiRes = await fetch(`${BASE_URL}/tours/${id}`, {
        method: 'GET',
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzQ0OGUyMzUxOWE3MzY0NGY4ZWJjOSIsImlhdCI6MTczMTQ3OTgwMSwiZXhwIjoxNzMyMzQzODAxfQ.6UQhpwRb6DhB4IHcKtXgC20q8XYpjuU8TnqG0NgasO8',
        },
      });
      const result = await apiRes.json();
      setTourData(result.data.data);
    } catch (error) {
      console.error('Error fetching tour data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div className="h-full p-20">
      <div className=" h-full">
        {tour ? (
          <div className="flex gap-6 justify-between h-full">
            <div className=" w-full ">
              <TourDetailCard tour={tour} />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Progress type="dashboard" percent={75} gapDegree={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TourDetails;
