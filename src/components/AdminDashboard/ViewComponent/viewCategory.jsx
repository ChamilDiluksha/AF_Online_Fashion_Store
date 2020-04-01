import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../ViewDetails/CategoryDetails';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class ViewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : []
          }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/category/')
            .then(response => {
                this.setState({ category: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.category.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() { 
        return ( 
            <div >
                <h5 align="center">Category List</h5>
                <MDBTable small style={{ marginTop: 20, width:"600px" }}>
                
                    <MDBTableHead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Type</th>
                        <th>Sub Type</th>
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
 
export default ViewCategory;