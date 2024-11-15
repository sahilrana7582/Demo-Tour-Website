import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaidIcon from '@mui/icons-material/Paid';

const serviceData = [
  {
    name: 'Tour Guide',
    description:
      'lorem ahaknac abancacncacnacacnac ancakncnac acacmac acmsascacamcaca canl',
    icon: 'PersonIcon',
  },
  {
    name: 'Budget Friendly',
    description:
      'lorem ahaknac abancacncacnacacnac ancakncnac acacmac acmsascacamcaca canl',
    icon: 'PaidIcon',
  },
  {
    name: 'Tour Customization',
    description:
      'lorem ahaknac abancacncacnacacnac ancakncnac acacmac acmsascacamcaca canl',
    icon: 'AutoAwesomeIcon',
  },
];

const ServiceList = () => {
  return (
    <div>
      {serviceData.map((ser, ind) => {
        return (
          <div>
            {React.createElement(ser.icon)}
            <h2>{ser.name}</h2>
            <p>{ser.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
