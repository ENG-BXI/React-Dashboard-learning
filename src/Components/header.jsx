import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router';
import {UserContext} from '../Context/UserContext';
const Header = () => {
  let {user, setUser} = useContext(UserContext);
  let nav = useNavigate();

  return (
    <>
      <ul className='d-flex list-unstyled column-gap-2 p-3 justify-content-between text-uppercase'>
        <div className='d-flex column-gap-2'>
          <Link className='nav-item text-decoration-none text-dark fs-6' to={'/'}>
            Home
          </Link>
          <Link className='nav-item text-decoration-none text-dark fs-6' to={'/about'}>
            about
          </Link>
          <Link className='nav-item text-decoration-none text-dark fs-6' to={'/dashboard'}>
            Dashboard
          </Link>
        </div>
        {user?.user === undefined ? (
          <div className='d-flex column-gap-2'>
            <Link to={'/register'} className='btn btn-primary'>
              register
            </Link>
            <Link to={'/login'} className='btn btn-primary'>
              login
            </Link>
          </div>
        ) : (
          <Link
            to='/login'
            className='btn btn-primary'
            onClick={() => {
              setUser({});
            }}
          >
            Logout
          </Link>
        )}
      </ul>
    </>
  );
};
export default Header;
