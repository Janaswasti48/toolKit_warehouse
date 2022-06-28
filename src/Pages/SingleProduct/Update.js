import React from 'react';

const Update = () => {
    return (
        <div className=''>
     <h2 className='text-4xl font-semibold text-center uppercase mt-10'> Please Update</h2>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Product Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Id</span>
                    </label>
                    <input type="text" placeholder="Product Id" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Quantity</span>
                    </label>
                    <input type="text" placeholder="Product Quantity" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Supplier Name</span>
                    </label>
                    <input type="text" placeholder="Supplier Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Image</span>
                    </label>
                    <input type="file" placeholder="Product Image" class="input input-bordered" />
                </div>
                <div class="form-control mt-6">
                    <button class="btn bg-green-600 border-none text-white">Update</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;