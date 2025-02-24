import {useContext} from 'react';
import {Link} from 'react-router';
import {UserContext} from '../../Context/UserContext';
import Cookies from 'universal-cookie';
function signOut(setUser, cookie) {
  cookie.remove('Bearer');
  setUser({});
}
export default function SideBarItem(props) {
  let {user, setUser} = useContext(UserContext);
  let cookie = new Cookies();
  return (
    <Link
      onClick={() => {
        props.setActiveItem(props.id);
        props.title === 'sign out' && signOut(setUser, cookie);
      }}
      to={props.path.startsWith('/') ? props.path : `/dashboard/${props.path}`}
      className={` ${props.activeItem === props.id && 'active'} side-bar-item  mb-2 d-flex px-4 mx-3 py-1 rounded-3 text-black text-decoration-none align-items-baseline column-gap-2`}
    >
      <i className={`fs-5 ${props.iconClass}`}></i>
      <h4 className='text-capitalize fs-6'>{props.title}</h4>
    </Link>
  );
}
