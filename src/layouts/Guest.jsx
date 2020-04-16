// @flow

import React from 'react';
import guestRoutes from '../router/guest';
import renderRoutes from "../router/Router";


const GuestLayout = () => {
    return (
        <div className="content">
            {renderRoutes(guestRoutes)}
        </div>
    )
}

export default GuestLayout;
