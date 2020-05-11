import React,{Component} from 'react';
import { Comment, Header, Rating } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class AddComment extends Component{
  render(){
    return (
      <div>
        <h2>Add Comments</h2>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Add Your Comment..." />
          </Form.Group>
          <Rating icon='star' defaultRating={3} maxRating={4} size='huge'/><br/>
          <Button className="mt-3" variant="dark" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
