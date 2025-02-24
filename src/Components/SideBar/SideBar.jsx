import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router';
import './SideBar.css';
import SideBarItem from './SideBarItem';
import {color} from '../../Context/UserContext';
import { SideBarActive } from '../../Context/SideBarActiveContext';

const SideBar = () => {
  let { activeItem, setActiveItem } = useContext(SideBarActive);
  let itemData = [
    {title: 'Home', iconClass: 'ri-home-smile-fill', path: ''},
    {title: 'users', iconClass: 'ri-group-fill', path: 'users'},
    {title: 'new user', iconClass: 'ri-user-fill', path: 'add-new-users'},
    {title: 'product', iconClass: 'ri-shopping-bag-fill', path: 'product'},
    {title: 'new Product', iconClass: 'ri-shopping-bag-fill', path: 'add-new-product'},
    {title: 'sign out', iconClass: 'ri-logout-box-line', path: '/login'}
  ];
  return (
    <div className='side-bar pt-3 vh-100 overflow-y-auto position-relative'>
      <div style={{color: '#f78787'}} className='mx-3 mt-2 mb-5'>
        <h2>
          <i className='ri-fire-fill'></i> logo
        </h2>
      </div>
      {itemData.map((element, index) => (
        <SideBarItem key={index} id={index} path={element.path} activeItem={activeItem} title={element.title} setActiveItem={setActiveItem} iconClass={element.iconClass} />
      ))}
    </div>
  );
};

export default SideBar;
