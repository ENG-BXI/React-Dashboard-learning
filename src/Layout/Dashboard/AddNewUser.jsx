import React from 'react';
import bootstrap from 'bootstrap';
import Forms from '../../Components/Forms';
const AddNewUser = () => {
  return (
    <>
      <h2 className='mt-3 mx-3'>Add New User</h2>
      <div className='mx-3 '>
        <Forms type='addNewUser' />
      </div>
    </>
  );
};

export default AddNewUser;
