import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from  './AdminNavBar';
import MainDashboard from './AdminController';
import SideNavBar from  './SideNavBar';
import './style.css';

class AdminDashboardHandler extends Component {
    
    render() { 
        return ( 
            <div>
                
                <NavBar />
                   <div className="row">
                        <div className="col-13" style={{ paddingLeft:"30px", paddingRight:"25px"}}>
                            
                            <SideNavBar />
                        </div>
                        <div className="col-18">
                            <MainDashboard />
                        </div>
                   </div>
                    
                
            </div>
         );
    }
}
 
export default AdminDashboardHandler;