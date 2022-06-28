import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Service from './Service';
const Services = () => {
    const [allInventories, setAllInventories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allInventories')
            .then(res => res.json())
            .then(data => setAllInventories(data))
    }, [])
    return (
        <div className=''>
            <h1 className='text-green-600 text-4xl text-center font-semibold uppercase my-5'>Inventories</h1>
            <div className='grid grid-cols-3'>
                {
                    allInventories.map(allInventory => <Service
                        key={allInventory._id}
                        allInventory={allInventory}
                    ></Service>)
                }
                
            </div>

        </div>
    );
};

export default Services;