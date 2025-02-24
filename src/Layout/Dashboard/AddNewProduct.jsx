import React, {useContext, useState} from 'react';
import LabelAndInput from '../../Components/LabelAndInput';
import bootstrap from 'bootstrap';
import axios from 'axios';
import {UserContext} from '../../Context/UserContext';
import {useNavigate} from 'react-router';
import {SideBarActive} from '../../Context/SideBarActiveContext';
const AddNewProduct = () => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [image, setImage] = useState({});
  let [accept, setAccept] = useState(false);
  let {user, setUser} = useContext(UserContext);
  let {activeItem, setActiveItem} = useContext(SideBarActive);
  let nav = useNavigate();
  console.log(image);
  function handle() {
    setAccept(true);
    if (title.length > 0 && description.length > 0 && image !== null) {
      let formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);
      try {
        axios
          .post('http://127.0.0.1:8000/api/product/create', formData, {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          })
          .then(response => {
            nav('/dashboard/product');
            setActiveItem(3);
          });
      } catch (error) {}
    }
  }
  return (
    <form className='text-bold' action=''>
      {/* // id label type state setState */}
      <LabelAndInput id='Title' Label='Title' type='text' state={title} setState={setTitle}></LabelAndInput>
      {title.length < 1 && accept && <p className='text-danger'>Title is Required</p>}
      <LabelAndInput id='description' Label='description' type='text' state={description} setState={setDescription}></LabelAndInput>
      {description.length < 1 && accept && <p className='text-danger'>Title is Required</p>}
      <LabelAndInput id='image' Label='image' type='file' state={image} setState={setImage}></LabelAndInput>
      {/* {image.length < 1 && accept && <p className='text-danger'>Title is Required</p>} */}
      <button onClick={handle} type='button' style={{backgroundColor: '#fdb9b9'}} className='btn font-weight-bold mt-2'>
        Add Product
      </button>
    </form>
  );
};

export default AddNewProduct;
