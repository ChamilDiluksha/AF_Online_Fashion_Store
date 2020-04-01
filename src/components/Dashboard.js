import React,{Component} from 'react';
import Admin from './AdminDashboard/AdminHandler';
import Container from './Home/Container';
import Cookies from "universal-cookie";


export default class Dashboard extends Component{
    constructor(props) {
        const cookies = new Cookies();
        let user = cookies.get('user');
        super(props);
        this.state = {
            user: user,
            userType: user.type
        }
    }
    render(){
        return (
            <div >
                {
                    (this.state.user.type === "User") ? (<Container/>) :  

                    (this.state.user.type === "Admin") ? (<Admin/>)  : null
                }
                
            </div>
        );
    }
}