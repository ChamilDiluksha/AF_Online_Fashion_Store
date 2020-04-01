import React, { Component } from 'react';
import axios from 'axios';
import {  Message } from 'semantic-ui-react'
import {Button, Col, Form} from 'react-bootstrap';

class Category extends Component {
    constructor(props) {
        super(props);

        this.onChangeCategoryID = this.onChangeCategoryID.bind(this);
        this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
        this.onChangeSubType = this.onChangeSubType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        

        this.state = { 
            CategoryID: '',
            CategoryType : '',
            SubType : '',
            description : '',
            message:''


         }
    }
    onChangeCategoryID(e) {
        this.setState({
            CategoryID: e.target.value
        });
    }

    onChangeCategoryType(e) {
        this.setState({
            CategoryType: e.target.value
        });
    }

    onChangeSubType(e) {
        this.setState({
            SubType: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            CategoryID: this.state.CategoryID,
            CategoryType : this.state.CategoryType,
            SubType : this.state.SubType,
            description :this.state.description 
        }



        axios.post('http://localhost:5000/category/create', obj)
        .then(res => {
                this.setState({
                    message: res.data.message
                });
                console.log(res.data.message);
            }
        );


        this.setState({
            CategoryID: '',
            CategoryType : '',
            SubType : '',
            description : ''

        });


    }

    render() { 
        return ( 
            <div style={{paddingBottom :"30px"}}>
            <Form onSubmit={this.onSubmit}>

                    <Form.Row>
                        <Form.Group as={Col} >
                                <Form.Control
                                    required
                                    type="text"
                                    id="cid"
                                    name="cid"
                                    value={this.state.CategoryID}
                                    onChange={this.onChangeCategoryID}
                                    placeholder="Category ID"/>
                        </Form.Group>

                        <Form.Group as={Col} >
                                <Form.Control
                                    required
                                    type="text"
                                    id="ctype"
                                    name="ctype"
                                    value={this.state.CategoryType}
                                    onChange={this.onChangeCategoryType}
                                    placeholder="Category Name"/>
                        </Form.Group>

                </Form.Row>

                    <Form.Group >
                    <Form.Label>Sub type</Form.Label>
                        <Form.Control as="select" 
                        id="subtype"
                        name="subtype"
                        value={this.state.SubType}
                        onChange={this.onChangeSubType}>
                        >
                            <option>None</option>
                            <option>CLOTHING</option>
                            <option>SPECIAL COLLECTIONS</option>
                            <option>ACCESSORIES</option>
                            

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Control
                                required
                                type="text"
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                placeholder="Description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>

            {   (this.state.message) ? 

                (
                    (this.state.message === 'Category successfully created') ? 
                    
                    (   
                        <Message color='green'>
                            <center>{this.state.message}</center>
                        </Message>
                    )

                    :

                    (   <Message color='red'>
                            <center>{this.state.message}</center>
                        </Message>
                    )

                )
                :
                null

            }
            </div>
         );
    }
}
 
export default Category;