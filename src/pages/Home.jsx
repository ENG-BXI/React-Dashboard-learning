import React, {useContext, useEffect} from 'react';
import Header from '../Components/header';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';

export const Home = () => {
  let { user, setUser } = useContext(UserContext);
  useEffect(() => {
    
  });
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
};
