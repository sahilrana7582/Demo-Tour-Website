import React, { useEffect, useRef, useState } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MovingIcon from '@mui/icons-material/Moving';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Col, Input, Row } from 'antd';
import { BASE_URL } from '../utils/BaseUrl';
import { locationAPI } from '../utils/resources';

const SearchHome = () => {
  const locationRef = useRef('');
  const distanceRef = useRef('');
  const sizeRef = useRef(0);
  const [latlng, setlatlng] = useState({});
  const fetchData = async (loc = '', dis = '', size = '') => {
    const apiResponse = await fetch(`${locationAPI}${loc}&limit=1`);
    const result = await apiResponse.json();
    const latilngi = { ...result.results[0].geometry };
    console.log(latilngi);
    console.log(dis);
    fetchTours(latilngi, dis);
  };
  const fetchTours = async (latlng, dist) => {
    const apiRes = await fetch(
      `${BASE_URL}/tours/distances/${latlng.lat},${latlng.lng}/unit/km`
    );
    const result = await apiRes.json();
    console.log('Tours---->', result);
  };
  const onSearch = async () => {
    const locationInfo = locationRef.current.input.value;
    const distanceInfo = distanceRef.current.input.value;
    const sizeInfo = sizeRef.current.input.value;
    fetchData(locationInfo, distanceInfo, sizeInfo);
  };
  useEffect(() => {}, [latlng]);
  return (
    <Row justify="space-evenly" gutter={[10, 10]}>
      <Col
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '100%' }}
        xl={{ flex: '20%' }}
      >
        <h1 className="font-bold text-xl">
          Plan Your <span className="text-2xl text-green-600">Trip</span>
        </h1>
      </Col>
      <Col
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '100%' }}
        xl={{ flex: '20%' }}
      >
        <Input
          placeholder="Location"
          prefix={<FmdGoodIcon />}
          ref={locationRef}
        />
      </Col>

      <Col
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '20%' }}
      >
        <Input
          placeholder="Distance"
          prefix={<MovingIcon />}
          ref={distanceRef}
        />
      </Col>

      <Col
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '20%' }}
      >
        <Input placeholder="Size" prefix={<GroupsIcon />} ref={sizeRef} />
      </Col>
      <Col
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '20%' }}
      >
        <Button icon={<SearchIcon />} onClick={() => onSearch()} />
      </Col>
    </Row>
  );
};

export default SearchHome;
