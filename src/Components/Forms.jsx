import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router';
import bootstrap from 'bootstrap';
import '../Auth/signUp.css';
import {toast} from 'react-toastify';
import {UserContext} from '../Context/UserContext';
import Cookies from 'universal-cookie';
import LabelAndInput from './LabelAndInput';
import { SideBarActive } from '../Context/SideBarActiveContext';
export default function Forms(props) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [passwordR, setPasswordR] = useState('');

  let [accept, setAccept] = useState(false);
  let [loading, setLoading] = useState(false);
  let [emailError, setEmailError] = useState('');
  let [showPassword, setShowPassword] = useState(false);
  let [showPasswordR, setShowPasswordR] = useState(false);
  let nav = useNavigate();
  let { user, setUser } = useContext(UserContext);
  let {activeItem, setActiveItem} = useContext(SideBarActive);
  const cookie = new Cookies();

  useEffect(() => {
    if (props.type === 'update') {
      axios
        .get(`http://127.0.0.1:8000/api/user/showbyid/${props.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then(response => {
          setName(response.data[0].name);
          setEmail(response.data[0].email);
        });
    }
  }, []);
  async function handle(e) {
    e.preventDefault();
    setLoading(true);
    setAccept(true);
    let response;
    if (name !== '' && password !== '' && email !== '' && password === passwordR) {
      switch (props.type) {
        case 'signIn':
          try {
            response = await axios.post('http://127.0.0.1:8000/api/register', {
              name: name,
              email: email,
              password: password,
              password_confirmation: passwordR
            });
            if (response.status === 200) {
              cookie.set('Bearer', response.data.data.token, {
                secure: true,
              });
              setUser(response.data.data);
              nav('/dashboard');
            }
          } catch (error) {
            setEmailError(error.status);
          }
          break;
        case 'update':
          try {
            response = await axios.post(
              `http://127.0.0.1:8000/api/user/update/${props.id}`,
              {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordR
              },
              {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            );
            toast.success('تم التعديل بنجاح');
            nav('/dashboard/users');
            setActiveItem(0)
          } catch (error) {
            setEmailError(error);
          }
          break;
        case 'addNewUser':
          try {
            response = await axios.post(
              'http://127.0.0.1:8000/api/user/create',
              {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordR
              },
              {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            );
            if (response.status === 200) {
              nav('/dashboard/users');
              setActiveItem(1);
              
            }
          } catch (error) {
            setEmailError(error.status);
          }
          break;
        default:
          return 0;
      }
    }
    setLoading(false);
  }
  return (
    <form className='form d-flex flex-column justify-content-center'>
      <div className={!props.register && `d-flex column-gap-2`}>
        <div className='w-100'>
          {/* // id  label type state useState */}
          {/* Name */}
          <LabelAndInput id='fname' Label='Name' type='text' state={name} setState={setName} />
          {name === '' && accept && <p className='text-danger'>name is required</p>}
        </div>

        <div className='w-100'>
          {/* Email */}
          <LabelAndInput id='email' Label='Email' type='text' state={email} setState={setEmail} />
          {emailError === 422 && <p className='text-danger fs-6'>Email is has been taken</p>}
        </div>
      </div>
      <div className={!props.register && `d-flex column-gap-2`}>
        <div className='w-100'>
          {' '}
          {/* password */}
          <LabelAndInput id='password' Label='Password' type='Password' state={password} setState={setPassword} showPassword={showPassword} changeShowPassword={setShowPassword} />
          {password.length < 8 && accept && <p className='text-danger'>Password Less than 8 character</p>}
        </div>

        <div className='w-100'>
          {/* repeat-password */}
          <LabelAndInput id='repeat-password' Label='Repeat password' type='Password' state={passwordR} setState={setPasswordR} showPassword={showPasswordR} changeShowPassword={setShowPasswordR} />
          {password !== passwordR && accept && <p className=' text-danger'>Password Is Not Match</p>}
        </div>
      </div>
      <div className={` d-flex ${props.register && 'justify-content-center'} column-gap-2 `}>
        {/* button */}
        <button style={{backgroundColor: !props.register && '#fdb9b9'}} className={`btn mt-3 fw-bold ${props.register && 'register bg-primary'}`} onClick={handle}>
          {loading ? <span className='loading rounded-circle'></span> : 'Register'}
        </button>
        {/* button */}
        {!props.register && (
          <button type='button' className='btn mt-3 fw-bold bg-body-secondary' onClick={() => nav('/dashboard/users')}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
