import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer />
            <ScrollToTop />
            <Navbar />
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;