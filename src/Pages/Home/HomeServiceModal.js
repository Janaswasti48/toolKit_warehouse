import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeServiceModal = ({ serviceModal,singleService }) => {

    // const  {_id} = singleService;
    // const navigate = useNavigate()
    // const handleToSingleProduct = event => {
    //     navigate(`/singleproduct/${_id}`)
    // }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Are You Sure You Want to Add This Product?</h3>
                    <div class="modal-action flex">
                        <label for="my-modal-6" class="btn bg-green-600 border-0 ">Cancel</label>
                        <label  for="my-modal-6" class="btn bg-green-600 border-0 ">Yes</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeServiceModal;