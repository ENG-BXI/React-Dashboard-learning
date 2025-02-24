import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../Components/SideBar/SideBar';
import {Outlet} from 'react-router';
import CircleNavItem from '../Components/DashBoard/DashNav';
import { UserContext } from '../Context/UserContext';

export const Dashboard = () => {
  let { user} = useContext(UserContext);  
  return (
    <>
      <div className='d-flex vh-100'>
        <SideBar />
        <div style={{flexGrow: '9', overflowY: 'auto'}}>
          <div>
            <div className='d-flex column-gap-1 justify-content-end mx-4 mt-3 mb-3'>
              <CircleNavItem item={<i className=' ri-search-line'></i>} />
              <CircleNavItem item={<i className='ri-notification-4-fill'></i>} />
              <CircleNavItem item={'Admin'} IconAdmin='true' />
              {/* <CircleNavItem item={`Hi👋 ${user.user.name}!!`} userName={true} /> */}
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
