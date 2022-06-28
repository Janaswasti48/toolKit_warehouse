
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Contact from './Pages/Contact/Contact';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MainProfile from './Pages/Profile/MainProfile';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import { createContext, useState } from 'react';
import Update from './Pages/SingleProduct/Update';


export const SingleContext = createContext()
function App() {
  const [singleproducts,setSingleProducts] = useState([])
  console.log(singleproducts);
  return (
    <div>
      <SingleContext.Provider value={[singleproducts,setSingleProducts]}>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/services' element={
              <RequireAuth>
                <Services></Services>
              </RequireAuth>
            }></Route>

            {/* <Route path='/services' element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }></Route> */}

            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/profile' element={<MainProfile></MainProfile>}></Route>
            <Route path='/singleproduct/:id' element={<SingleProduct></SingleProduct>}></Route>
            <Route path = '/update' element={<Update></Update>}></Route>
          </Routes>
        </Navbar>
      </SingleContext.Provider>


    </div>
  );
}

export default App;
