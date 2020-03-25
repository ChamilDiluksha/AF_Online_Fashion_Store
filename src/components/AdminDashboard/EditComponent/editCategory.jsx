import React, { Component } from 'react';
import axios from 'axios';
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


    componentDidMount() {
        axios.get('http://localhost:5000/category/'+this.props.match.params.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    CategoryID: response.data.CategoryID,
                    CategoryType: response.data.CategoryType,
                    SubType: response.data.SubType,
                    description: response.data.description,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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



        axios.put('http://localhost:5000/category/update/'+this.props.match.params.id, obj)
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
        window.location.href = "/log/Admin/vieCategory";

    }

    render() { 
        return ( 
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
         );
    }
}
 
export default Category;