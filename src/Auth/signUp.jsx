import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Components/header';
import Forms from '../Components/Forms';
export const SignUp = () => {
  return (
    <>
      <Header />
      <div className='sign-up-card  p-4 text-uppercase p-4 mx-auto rounded-4'>
        <h2 className='mb-3'>Register!!🔥</h2>
        <Forms type='signIn' register />
      </div>
    </>
  );
};
