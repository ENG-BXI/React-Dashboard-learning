import React, {useContext, useState} from 'react';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './signUp.css';
import Header from '../Components/header';
import {UserContext} from '../Context/UserContext';
import {useNavigate} from 'react-router';
import Cookies from 'universal-cookie';
export const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [accept, setAccept] = useState(false);
  let [loading, setLoading] = useState(false);
  let [errorLogin, setErrorLogin] = useState(0);
  let {user, setUser} = useContext(UserContext);
  let cookie = new Cookies();
  let nav = useNavigate();
  async function Register(e) {
    e.preventDefault();
    setLoading(true);
    setAccept(true);
    if (email !== '' && password !== '') {
      try {
        let response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: email,
          password: password
        });

        if (response.status === 200) {
          cookie.set('Bearer', response.data.data.token, {secure: true});
          setUser(response.data.data);
          nav('/dashboard');
        }
      } catch (error) {
        console.log('error is ', error.response.status);
        setErrorLogin(error.response.status);
      }
    }
    setLoading(false);
  }
  return (
    <>
      <Header />
      <div className='sign-up-card text-uppercase  p-4 mx-auto rounded-4'>
        <h2 className='mb-3'>Welcome Back 👋</h2>
        <form className='form d-flex flex-column justify-content-center'>
          {/* Email */}
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            required
            className='form-control'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />

          {/* password */}
          <label htmlFor='password' className='form-label'>
            {' '}
            password{' '}
          </label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          {password.length < 8 && accept && <p className='text-danger'>Password Less than 8 character</p>}
          {errorLogin === 401 && <p className='text-danger mt-3'>Email or Password is Error</p>}
          {/* button */}
          <button className='btn bg-info mt-3 w-50 mx-auto fw-bold' onClick={Register}>
            {loading ? <span className='loading rounded-circle'></span> : 'Login'}
          </button>
        </form>
      </div>
    </>
  );
};
