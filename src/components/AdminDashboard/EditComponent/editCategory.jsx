import React, { Component } from 'react';
import axios from 'axios';
import {Button, Col, Form, FormControl} from 'react-bootstrap';

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
            stages:[
                {stage:""}
            ],
            ItemStages:[],
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
                    stages:response.data.stages,
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


    handleAddStage = () => {
        const item = {
            stage: "",
        };
        this.setState({
            stages: [...this.state.stages, item]
        });
    };


    handleChangeStageName = idx => e => {
        const stages = [...this.state.stages];
        stages[idx] = {
            stage: e.target.value,
        };
        this.setState({
            stages
        });
    };


    handleRemoveStage = () => {

        this.setState({
            stages: this.state.stages.slice(0, -1)
        
        });
    };


    onSubmit(e) {
        e.preventDefault();


        let editstages;
        for(let i = 0; i < this.state.stages.length ; i++){
            editstages = {
                stageNo: i + 1,
                stage: this.state.stages[i].stage,
            };
            this.state.ItemStages.push(editstages);
        }


        const obj = {
            CategoryID: this.state.CategoryID,
            CategoryType : this.state.CategoryType,
            SubType : this.state.SubType,
            stages: this.state.ItemStages,
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
            ItemStages:[],
            stages:[{stage:''}],
            description : ''

        });
        window.location.href = "/log/Admin/vieCategory";

    }

    render() { 
        return ( 
            
          
            <div className="row">
            <div  className="col-13" style={{ paddingLeft:"30px", paddingRight:"60px"}}>
            <h5 style={{padding:"15px"}}>Edit Category</h5>
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
            </div>
            <div style={{ paddingTop:"5px"}}> 
            <Form.Group>
                                <Form.Label>Sub Item</Form.Label>

                                {}
                                <table  className="stageTable" id="tab_logic">
                                    <thead>

                                            <tr>
                                                <td>No</td>
                                                <td align="center">Item</td>
                                            </tr>

                                    </thead>
                                    <tbody>
                                    {this.state.stages.map((item, idx) => (
                                        <tr id="addr0" key={idx}>
                                            <td>
                                                <h6>{idx+1}</h6>
                                            </td>
                                            <td>
                                                <FormControl
                                                    type="text"
                                                    aria-label="stage"
                                                    value={this.state.stages[idx].stage}
                                                    onChange={this.handleChangeStageName(idx)}
                                                   
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <table className="buttons">
                                    <tbody>
                                    <tr>
                                        <td align="right">
                                           <br/> <Button onClick={this.handleAddStage}>Add Item</Button>
                                        </td>
                                        <td align="left">
                                        <br/><Button onClick={this.handleRemoveStage}>Delete Item</Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Form.Group>
            </div>

            </div>
         );
    }
}
 
export default Category;