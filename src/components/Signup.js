import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fname:'',
            Username: '',
            Password: '',
            message: ''
         }
    }

    onChangeFname =(e)=> {
        this.setState({
            fname: e.target.value
        });
    }


    onChangeUsername =(e)=> {
        this.setState({
            Username: e.target.value
        });
    }
    onChangePassword = (e) =>{
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit = (e)=> {
        e.preventDefault();
        const obj = {
            fname: this.state.fname,
            Username: this.state.Username,
            Password: this.state.Password,
        };


        axios.post('http://localhost:5000/user/sign-up', obj)
        .then(res => {
                this.setState({
                    message: res.data.message
                });
                console.log(res.data.message);
            }
        );


        this.setState({
            fname:'',
            Username: '',
            Password: '',
            message: ''

        });
        window.location.href = "/sign-in";

    }
    render() { 
        return ( 

            
            <div style={{paddingLeft:"450px", paddingTop:"80px" , paddingBottom:"50px"}}>
            <form onSubmit={this.onSubmit}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <MDBCard>
                    <MDBCardBody className="mx-4">
                        <div className="text-center">
                            <h3 className="dark-grey-text mb-5">
                            <strong>Sign Up</strong>
                            </h3>
                        </div>
                        <Form.Group >
                            < Form.Control 
                            required
                            type="text" 
                            placeholder="Name"
                            name="fname" 
                            value={this.state.Fname}
                            onChange={this.onChangeFname}
                            />
                        </Form.Group>

                        <Form.Group >
                            < Form.Control 
                            required
                            type="email" 
                            placeholder="Enter email"
                            name="email" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                        </Form.Group>
                        <Form.Group >
                        <Form.Control 
                            required
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </Form.Group>
                   
                    <div className="text-center mb-3">
                    <MDBBtn
                            type="submit"
                            gradient="blue"
                            rounded
                            className="btn-block z-depth-1a"
                            >
                            Sign Up
                    </MDBBtn>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                     or Sign up with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                        <MDBBtn
                            type="submit"
                            color="white"
                            rounded
                            className="mr-md-3 z-depth-1a"
                        >
                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                        </MDBBtn>
                            <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            className="mr-md-3 z-depth-1a"
                            >
                        <MDBIcon fab icon="twitter" className="blue-text" />
                        </MDBBtn>
                            <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            className="z-depth-1a"
                            >
                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                        </MDBBtn>
                    </div>
                    </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">
                            Not a member?
                            <Link to="/sign-in"className="edit">

                                Sign In
                            </Link>
                        </p>
                    </MDBModalFooter>
                    </MDBCard>
                    </MDBCol>
                    </MDBRow>
                    </MDBContainer>
            </form>
            </div>
         );
    }
}
 
export default Signup;