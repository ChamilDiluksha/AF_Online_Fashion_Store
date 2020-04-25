import React, { Component } from 'react';
import StoreNavigation from  './StoreNavigation';
import ProductController from './ProductController';

class UploadDressItems extends Component {
    
    render() { 
        return ( 
            <div>
                <StoreNavigation />
                <ProductController />
            </div>
         );
    }
}

export default UploadDressItems;

