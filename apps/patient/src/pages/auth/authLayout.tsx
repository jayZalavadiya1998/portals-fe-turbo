import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {

    return (
        <div >
            <div>
                <div className='heroImage'>
                    <img src="images/svg/statistics.svg" alt='logo' />
                </div>
                <div className='leftTitleText'>
                    <h2>Access Patient Information with ease</h2>
                    <h3>Your health is our priority</h3>
                </div>
            </div>
            <div >
                <div >
                    <img
                        src="images/alera.png"
                        alt='logo'
                    />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
