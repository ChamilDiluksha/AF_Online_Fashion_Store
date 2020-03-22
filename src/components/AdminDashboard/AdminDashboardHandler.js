import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from  './AdminNavBar';
import SideNavBar from  './SideNavBar';

class AdminDashboardHandler extends Component {
    
    render() { 
        return ( 
            <div>
                <Router>
                    <div>
                        <NavBar />
                        <SideNavBar />
                    </div>
                    <div>

                    </div>
                    
                </Router>
            </div>
         );
    }
}
 
export default AdminDashboardHandler;