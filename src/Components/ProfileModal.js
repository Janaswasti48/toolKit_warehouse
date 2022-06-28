import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Pages/firebase/firebase.init';

const ProfileModal = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
   

    const handleToProfile = event =>{
        
        navigate('/profile')
    }
    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="profile-modal" class="mt-4 mr-4 btn bg-green-600 border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="avatar online rounded-lg m-auto">
                        <img className='w-50 rounded-full ' src={user.photoURL} alt="" />
                    </div>
                    <div className=''>
                        <h3 class="font-bold text-lg my-4">{user.displayName}</h3>
                        <p className='text-xm font-semibold'>Email: {user.email}</p>
                        <p class=" text-xm font-semibold">UID: {user.uid}</p>
                        <input className='input input-bordered my-5' type="file" name="image" value="" />
                    </div>
                    <div class="modal-action">
                        <label onClick={handleToProfile} for="profile-modal" class="btn bg-green-600 border-none">View Profile</label>
                    </div>

                    {/* <label for="profile-modal " class="btn  "><Link to='/profile'>View Profile</Link></label> */}
                </div>
            </div>
        </div>


        // <div class="dropdown">
        //     <label tabindex="0" class="btn m-1"></label>
        //     <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
        //         <div class="card-body">
        //             <h3 class="card-title">Card title!</h3>
        //             <p>you can use any element as a dropdown.</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProfileModal;