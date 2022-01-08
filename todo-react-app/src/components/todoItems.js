import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import "../index.css"

const todoItems = (props) => {
  return (
    <Card >
      <Card.Content>
        <Card.Description className='todoListItems'>
            <strong> { props.todoListItems } </strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Update
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default todoItems;
