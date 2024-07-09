import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center text-muted lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="hidden relative lg:flex flex-col items-center justify-center bg-blue-200 h-full w-full">
                <div>
                    <img 
                        className='object-scale-down h-48'
                        src="svg/statistics.svg"
                        alt='logo'
                    />
                </div>
                <div className='flex flex-col items-center justify-center mt-10 gap-1'>
                    <span className='font-extrabold'>Access Patient Information with ease</span>
                    <span className='font-light'>Your health is our priority</span>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center'>
                    <img
                        className='w-64'
                        src="png/alera.png"
                        alt='logo'
                    />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
