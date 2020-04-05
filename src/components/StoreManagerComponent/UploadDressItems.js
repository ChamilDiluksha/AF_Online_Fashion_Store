import React, { Component } from 'react';
import StoreNavigation from  './StoreNavigation';
import AddDressForm from  './AddDressForm';

class UploadDressItems extends Component {
    
    render() { 
        return ( 
            <div>
                <StoreNavigation />
                <AddDressForm/>
            </div>
         );
    }
}

export default UploadDressItems;

