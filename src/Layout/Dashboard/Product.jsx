import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../Context/UserContext';
import {ToastContainer} from 'react-toastify';
import DashTable from '../../Components/DashBoard/DashTable';

function deleteProduct() {}
const Product = () => {
  let [products, setProducts] = useState([]);
  let {user, setUser} = useContext(UserContext);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/product/show', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section>
        <ToastContainer />
        <h2 className='mx-4'>Products</h2>
        <DashTable type='product' item={products} deleteItem={deleteProduct} />
      </section>
    </>
  );
};

export default Product;
