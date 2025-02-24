import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {UserContext} from '../Context/UserContext';
import {Navigate, Outlet} from 'react-router';

  function Loading() {
    return <></>;
  }
const PersistLogin = () => {
  let cookie = new Cookies();
  let token = cookie.get("Bearer");
  let { user, setUser } = useContext(UserContext);
  let [loading, setLoading] = useState(true);
  async function getToken() {
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/refresh', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
      cookie.set('Bearer', response.data.token);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      cookie.remove("Bearer");
      setUser({});
        setLoading(false);
    }
  }

  useEffect(() => { getToken();}, []);
  
  return loading ? <Loading /> : token?<Outlet/>:<Navigate to="/login"/>;
  
 
};

export default PersistLogin;
