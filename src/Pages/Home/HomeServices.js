import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeService from './HomeService';
import HomeServiceModal from './HomeServiceModal';
import { SingleContext } from '../../App';



const HomeServices = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    const [serviceModal, setServiceModal] = useState(null)
    const [singleproducts,setSingleProducts] = useContext(SingleContext);
    
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    
    return (
        <div className='my-40'>
            <div className='text-center '>
                <h2 className='text-4xl text-green-600 font-semibold uppercase my-5'>Featured Products</h2>
                <p className='text-xl'>We have curated a selection of recommended products as well as seasonal items that we would love for you to try out!</p>
            </div>
            <div className='grid grid-cols-3 justify-center mt-20'>

                {
                    services.map(service => <HomeService
                        key={service._id}
                        service={service}
                        setServiceModal={setServiceModal}
                    >
                    </HomeService>)
                }
                <div className='w-100 '>
                <button className='btn mx-auto text-center bg-green-600 text-white border-none' type="submit"><Link to='/services'>Manage Inventories</Link></button>
                </div>
                
                
                
                {/* {
                    serviceModal && <HomeServiceModal  serviceModal={serviceModal}></HomeServiceModal>
                } */}
            </div>
        </div>

    );
};

export default HomeServices;