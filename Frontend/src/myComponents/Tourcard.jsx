import React from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StarIcon from '@mui/icons-material/Star';
import { NavLink, useNavigate } from 'react-router-dom';
const { Meta } = Card;
const Tourcard = ({ tour }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/tours/${tour._id}`)}
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={`/img/tours/${tour.imageCover}`}
          className="h-[200px]"
        />
      }
      actions={[
        <p className="font-semibold">${tour.price}</p>,
        <Button>Book Now</Button>,
      ]}
    >
      <h1 className="flex justify-between items-center mb-6">
        <p className="flex items-center gap-1">
          <FmdGoodIcon fontSize="small" />
          {tour.startLocation.description}
        </p>
        <p className="flex items-center gap-1">
          <StarIcon fontSize="small" />
          {tour.ratingsAverage}({tour.ratingsQuantity})
        </p>
      </h1>
      <Meta title={tour.name} />
    </Card>
  );
};
export default Tourcard;
