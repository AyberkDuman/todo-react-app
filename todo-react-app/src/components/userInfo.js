import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const userInfo = (props) => {
  return (
  <Card >
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header className='userName'> {props.userName} 's todo list </Card.Header>
    </Card.Content>
    <Card.Content extra>
      
        <Button onClick={props.onClick}  basic color='red'>
          Logout
        </Button>
      
    </Card.Content>
  </Card>

);
};

export default userInfo;
