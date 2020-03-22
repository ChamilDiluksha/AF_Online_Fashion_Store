import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import AddManager from './NavComponenets/CreateStoreManager';
import AddCategory from './NavComponenets/CreateCategory';
import viewManager from './ViewComponent/viewManager';
import viewCategory from './ViewComponent/viewCategory';
import editManager from './EditComponent/editStoreManager';
import editCategory from './EditComponent/editCategory';
 
class AdminDashboardController  extends Component {
    render() { 
        return ( 

            <Switch>
                 
                <Route path="/Admin/AddManager" component={ AddManager } />
                <Route path="/Admin/AddCategory" component={ AddCategory } />

                <Route path="/Admin/ViewManager" component={ viewManager } />
                <Route path="/Admin/vieCategory" component={ viewCategory } />

                <Route path="/Admin/EditManager/:id" component={ editManager } />
                <Route path="/Admin/EditCategory/:id" component={ editCategory } />
            </Switch>
         );
    }
}
 
export default AdminDashboardController;