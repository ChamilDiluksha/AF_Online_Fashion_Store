import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import {Button, Col, Form} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            username: '',
            password: '',
            message: ''
         }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Username: this.state.username,
            Password: this.state.password,
        };
        axios.post('http://localhost:5000/user/sign-in', obj)
            .then(
                (response) => {
                    let time = new Date();
                    time.setTime(time.getTime() + (60*60*1000));
                    console.log(response);
                    const cookies = new Cookies();
                    cookies.set('token', response.data.token, { path: '/',expires:time });
                    cookies.set('user', {"username":response.data.username,"userId":response.data.userId,"type":response.data.type}, { path: '/',expires:time});
                    //console.log("User :" , cookies.get('user'));
                    this.setState({
                        message: response.data.message
                    });
                    if(this.state.message === 'Authentication successful'){
                        window.location.href = "/log";
                    }
                   
                },
                (error) => {
                    //console.log(error);
                    this.setState({
                        message: 'Invalid login, please try again'
                    });}
            );
        this.setState({
            message: '',
            username: '',
            password:'',
        });
    }


    

    render() { 
        return ( 
            <div>
                <div>
                {
                    (this.state.message) ? (
                        <h5 align="center" className="alert-warning"><i className="fa fa-warning"> {this.state.message}</i> </h5>
                    ) : (null)
                }
                </div>
                <div style={{paddingLeft:"450px", paddingTop:"80px", paddingBottom:"50px"}}>
                <form onSubmit={this.onSubmit}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                <strong>Sign in</strong>
                                </h3>
                            </div>

                        {   (this.state.message) ? 

                                (
                                    (this.state.message === 'Authentication successful') ? 
                                    
                                    (   <Alert variant="success">
                                            <center>{this.state.message}</center> 
                                        </Alert>
                                    )

                                    :

                                    (  <Alert variant="danger">
                                            <center>{this.state.message}</center> 
                                        </Alert>
                                    )
                                
                                )
                                :
                                null
                            
                        }

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
                        <p className="font-small blue-text d-flex justify-content-end pb-3">
                            Forgot
                            <a href="#!" className="blue-text ml-1">

                            Password?
                            </a>
                        </p>
                        <div className="text-center mb-3">
                        <MDBBtn
                                type="submit"
                                gradient="blue"
                                rounded
                                className="btn-block z-depth-1a"
                                >
                                Sign in
                        </MDBBtn>
                        </div>
                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                         or Sign in with:
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
                                <Link to="/Signup"className="edit">

                                    Sign Up
                                </Link>
                            </p>
                        </MDBModalFooter>
                        </MDBCard>
                        </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                </form>
                </div>
            </div>
         );
    }
}
 
export default Login;