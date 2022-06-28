import React from 'react';

const MainProfile = () => {
    const imgStorageKey = '4492d6168647029ac02109ecd464dd4a'
    return (
        <div>
            <h2 className='text-center uppercase text-4xl text-green-600'>My Profile</h2>


            <input className='input input-bordered text-green-600 ' type="file" name="file" value=""/>
        </div>
    );
};

export default MainProfile;