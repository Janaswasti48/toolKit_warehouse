import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleContext } from '../../App';



const SingleProduct = () => {
    const { id } = useParams()
    const [singleproducts, setSingleProducts] = useState([]);
    const singleProduct = singleproducts.find(singleproduct => singleproduct._id === id)

    const navigate = useNavigate();
    const handleToUpdate = event => {
        navigate('/update')
    }
    const handleToMainService = event => {
        navigate('/services')
    }

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setSingleProducts(data))
    }, [])

    return (
        <div className='mx-auto'>
            <div class=" card w-96 bg-base-100 shadow-xl my-10">
                <figure><img src={singleProduct?.img} alt="" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl text-green-600 font-semibold">{singleProduct?.name}</h2>
                    <p>{singleProduct?.description}</p>
                    <p className='font-semibold'>Price -- {singleProduct?.price}</p>
                    <p className='font-semibold'>Product Quantity: {singleProduct?.quanntity}</p>
                    <div class="card-actions justify-end my-5">
                        <button class="btn bg-green-600 border-none text-white">Shift</button>
                        <button onClick={handleToUpdate} class="btn bg-green-600 border-none text-white">Update</button>
                    </div>
                </div>
            </div>
                <div className='w-full'>
                <input onClick={handleToMainService} type="submit" value='Manage Inventories' className=" my-5 btn items-center bg-green-600 text-white border-0  w-full max-w-xs" />
                </div>

        </div>
    );
};

export default SingleProduct;