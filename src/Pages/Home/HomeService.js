import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../firebase/firebase.init';
import HomeServiceModal from './HomeServiceModal';


const HomeService = ({ service, setServiceModal }) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, _id, img, description, price ,supplierName} = service;
    const navigate = useNavigate()
    const handleToSingleProduct = event => {
        if(loading){
            <Loading></Loading>
        }
        navigate(`/singleproduct/${_id}`)
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto gap-5 my-5">
            <figure><img className='hover:scale-125 transition delay-300 duration-300 ease-in-out cursor-pointer' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h3 class="text-2xl text-green-600 ">{name}</h3>
                <h4 className='text-xl'>Supplier Name: {supplierName}</h4>
                <p>{description}</p>
                <p className='font-semibold'>Price -- {price}</p>

                <div class="card-actions justify-center">

                    <button onClick={handleToSingleProduct} className="btn  my-10 bg-green-600 text-white border-none">Add to Cart</button>
                    {/* <label onClick={() => setServiceModal(service)} for="my-modal-6" className="btn   bg-green-600 text-white border-none">Add to Card</label> */}

                </div>
            </div>

            {/* {
                singleServices.map(singleService =>
                <HomeServiceModal key={singleService._id}  singleService={singleService}></HomeServiceModal>
                )
            } */}
        </div>
    );
};

export default HomeService;