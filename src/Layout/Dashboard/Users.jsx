import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import DashTable from '../../Components/DashBoard/DashTable';
import {UserContext} from '../../Context/UserContext';
const Users = () => {
  let [users, setUsers] = useState([]);
  let {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get('http://127.0.0.1:8000/api/user/show', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(response => {
        response.data = response.data.filter((element, index) => {
          return element.id !== user.user.id;
        });
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  async function deleteUser(id) {
    await axios
      .delete(`http://127.0.0.1:8000/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(() => {
        toast.success('تم الحذف بنجاح');
        getUsers();
      });
  }

  return (
    <section>
      <ToastContainer />
      <h2 className='mx-4'>Users</h2>
      <DashTable type='user' item={users} deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
