import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react'

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class CreateItem extends Component {
    state = {}

    

    render() {
        return (
            <Form>
            <Form.Group widths='equal'>
              <Form.Field
                control = {Input}
                label = 'Add new item on your Todo List'
                placeholder = 'New Item'
              />
            </Form.Group>
        
            <Form.Field control = {Button} >Submit</Form.Field>    
        
          </Form>
        
        )
    }
}
export default CreateItem;
