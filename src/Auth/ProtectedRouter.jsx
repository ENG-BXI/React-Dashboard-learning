import {useContext} from 'react';
import {UserContext} from '../Context/UserContext';
import {Navigate, Outlet} from 'react-router';
import Cookies from 'universal-cookie';

export default function ProtectedRouter() {
  let { user, setUser } = useContext(UserContext);
  console.log("user is ========",user);
  
  return user?.user === undefined ? <Navigate to='/login' /> : <Outlet />;
}
