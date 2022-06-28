import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Carosol from './Carosol';
import Contactus from './Contactus';
import HomeService from './HomeService';
import HomeServices from './HomeServices';


const Home = () => {
    return (
        <div>
           <Carosol></Carosol>
           <HomeServices></HomeServices>
           <Contactus></Contactus>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;