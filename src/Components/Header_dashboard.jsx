import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderDashboard = () => {
  return (
    <div style={{boxShadow: '0 0 16px gray'}} className='d-flex justify-content-between py-3 px-5 '>
      <h3 className='fw-bold'>Store</h3>
      <button className='btn btn-success'>Go to Web Site</button>
    </div>
  );
}

export default HeaderDashboard