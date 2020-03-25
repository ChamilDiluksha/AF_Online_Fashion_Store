import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ManagerDetails extends Component {
    constructor(props) {
        super(props);
     
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:5000/storemanager/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        window.location.href = "/Admin/ViewManager";
    }

    render() { 
        return ( 
            <tr>
            <td>
                {this.props.obj.fname}
            </td>
            <td>
                {this.props.obj.email}
            </td>
            <td>
                {this.props.obj.contact}
            </td>
            <td>
                <Link to={"/log/Admin/EditManager/"+this.props.obj._id} className="edit"> <i className="fas fa-user-edit" style={{paddingRight:"10px"}}></i></Link>
            </td>
            <td>

                <p
                    className="delete"
                    onClick={ () =>
                        window.confirm("Are you sure you wish to delete this admin?") &&
                        this.delete()
                    }
                >
                    <i className="fas fa-trash" style={{paddingRight:"10px"}}></i>
                </p>
            </td>
        </tr>
         );
    }
}
 
export default ManagerDetails;