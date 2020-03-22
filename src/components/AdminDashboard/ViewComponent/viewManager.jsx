import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import TableRow from '../ViewDetails/ManagerDetails';

class ViewManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            managers : []
         };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/storemanager/')
            .then(response => {
                this.setState({ managers: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    tabRow(){
        return this.state.managers.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() { 
        return ( 
            <div >
                <h5 align="center">Managers List</h5>
                <MDBTable small  style={{ marginTop: 20, width:"600px" }}>
                <MDBTableHead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    { this.tabRow() }
                    </MDBTableBody>
                </MDBTable>
            </div>
         );
    }
}
 
export default ViewManager;