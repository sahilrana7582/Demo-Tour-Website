import React from 'react';
import SearchBar from './SearchBar';
import UserNav from './UserNav';
import { NavLink } from 'react-router-dom';

const navData = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'Tours',
    href: '/tours',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Nav = () => {
  return (
    <div className="flex justify-between w-full px-8 py-3 shadow-xl">
      <div className="flex gap-2 items-center ">
        <img src="/img/logo-green-round.png" className="w-9 h-9"></img>
        <h1 className=" text-slate-100 text-xl font-thin ">inTours</h1>
      </div>

      <div>
        <ul className="flex gap-10 items-baseline justify-center">
          {navData.map((nav, i) => {
            return (
              <NavLink to={nav.href} key={i}>
                <li className="font-semibold hover:text-green-500 transition-colors duration-500">
                  {nav.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div>
        <UserNav />
      </div>
    </div>
  );
};

export default Nav;
