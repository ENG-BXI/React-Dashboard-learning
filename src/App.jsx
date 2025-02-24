import React from 'react';
import {SignUp} from './Auth/signUp';
import {Login} from './Auth/Login';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Dashboard} from './pages/Dashboard';
import Users from './Layout/Dashboard/Users';
import EditUser from './Layout/Dashboard/EditUser';
import AddNewUser from './Layout/Dashboard/AddNewUser';
import {Route, Routes} from 'react-router';
import {UserContextProvider} from './Context/UserContext';
import ProtectedRouter from './Auth/ProtectedRouter';
import PersistLogin from './Auth/PersistLogin';
import Product from './Layout/Dashboard/Product';
import AddNewProduct from './Layout/Dashboard/AddNewProduct';
import ProviderSideBarActive from './Context/SideBarActiveContext';
const App = () => {
  return (
    <div>
      <ProviderSideBarActive>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route element={<PersistLogin />}>
              <Route element={<ProtectedRouter />}>
                <Route path='/dashboard' element={<Dashboard />}>
                  <Route path='users' element={<Users />}></Route>
                  <Route path='users/:id' element={<EditUser />}></Route>
                  <Route path='add-new-users' element={<AddNewUser />}></Route>
                  <Route path='product' element={<Product />}></Route>
                  <Route path='add-new-product' element={<AddNewProduct />}></Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </UserContextProvider>
      </ProviderSideBarActive>
    </div>
  );
};

export default App;
