import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router';
import Forms from '../../Components/Forms';
import bootstrap from 'bootstrap';
const EditUser = () => {
  const {id} = useParams();
  return (
    <>
      <h2 className='mt-3 mx-3'>Update User</h2>
      <div className='mx-auto px-3'>
        <Forms type='update' id={id} />
      </div>
    </>
  );
};

export default EditUser;
