// @flow

import React from 'react';
import headmasterRoutes from '../router/headmaster';
import renderRoutes from "../router/Router";


const HeadmasterLayout = () => {
    return (
        <div className="content">
            {renderRoutes(headmasterRoutes)}
        </div>
    )
}

export default HeadmasterLayout;
