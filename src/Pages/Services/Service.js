import React from 'react';

const Service = ({ allInventory }) => {
    const { name, _id, description, img, supplierName, price } = allInventory
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto gap-5 my-5">
                <figure><img className='hover:scale-125 transition delay-300 duration-300 ease-in-out cursor-pointer' src={img} alt="" /></figure>
                <div class="card-body">
                    <h3 class="text-2xl text-green-600 ">{name}</h3>
                    <h4 className='text-xl'>Supplier Name: {supplierName}</h4>
                    <p>{description}</p>
                    <p className='font-semibold'>Price -- {price}</p>

                    <div class="card-actions justify-center">

                        <button  className="btn  my-10 bg-green-600 text-white border-none">Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;