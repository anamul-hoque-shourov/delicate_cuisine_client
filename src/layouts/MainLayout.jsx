import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-300px)] py-5'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;