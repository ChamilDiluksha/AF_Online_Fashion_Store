import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'


class userDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
            <td>
            
            <Image  src='https://react.semantic-ui.com/images/avatar/small/matthew.png' avatar/> 
           
            
            <span>{this.props.obj.Username}</span>
            </td>
            <td>
                {this.props.obj.Type}
            </td>
        </tr>
         );
    }
}
 
export default userDetails;