import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    delete() {
        axios.delete('http://localhost:5000/category/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        window.location.href = "/Admin/vieCategory";
    }

    render() { 
        return ( 
            <tr>
            <td>
                {this.props.obj.CategoryID}
            </td>
            <td>
                {this.props.obj.CategoryType}
            </td>
            <td>
                {this.props.obj.SubType}
            </td>
            <td>
                <Link to={"/log/Admin/EditCategory/"+this.props.obj._id} className="edit"><i className="fas fa-edit" style={{paddingRight:"10px"}}></i></Link>
            </td>
            <td>

                <p
                    className="delete"
                    onClick={e =>
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
 
export default CategoryDetails;

