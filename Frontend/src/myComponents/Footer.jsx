import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Divider, Input, Space } from 'antd';
import { NavLink } from 'react-router-dom';
const linkData = [
  {
    name: 'Overview',
    href: '/',
  },
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Tours',
    href: '/tours',
  },
];

const Footer = () => {
  return (
    <div className=" py-20 px-10 bg-black w-full text-white text-center">
      <div className="flex justify-between ">
        <div className="w-1/3 border-r">
          <div className="m-10">
            <img src="/img/logo-green.png"></img>
          </div>
          <div className="px-10">
            <Divider style={{ borderColor: '#32de84' }} />
          </div>
          <div className="flex justify-evenly">
            <XIcon className="hover:text-green-300" />
            <InstagramIcon className="hover:text-green-300" />
            <MailIcon className="hover:text-green-300" />
          </div>
        </div>

        <div className=" border-r  w-1/3 flex flex-col">
          <h1 className="text-center text-xl font-semibold text-green-500 mb-8">
            Quick Links
          </h1>
          {linkData.map((link, ind) => (
            <NavLink to={link.href} key={ind}>
              <p
                key={ind}
                className="hover:text-green-400 transition-colors duration-500 mt-2"
              >
                {link.name}
              </p>
            </NavLink>
          ))}
        </div>
        <div className="w-1/3 p-10 ">
          <h2 className="mb-4 text-2xl text-green-500 font-semibold">
            Subscribe for latest offers
          </h2>
          <Space.Compact style={{ width: '80%' }}>
            <Input defaultValue="Email" />
            <Button type="default">Subscribe</Button>
          </Space.Compact>
        </div>
      </div>
    </div>
  );
};

export default Footer;
