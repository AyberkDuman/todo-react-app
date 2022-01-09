import React, { useEffect, useState } from 'react'
import { Button, Card, Input } from 'semantic-ui-react'
import "../index.css"
import { db } from "../firebase/index";
import {
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TodoItems = (props) => {

  const [item, setItem] = useState();
  const [itemId, setItemId] = useState();
  const [isInEditMode, setIsInEditMode] = useState();

  useEffect(() => {
    setItem(props.todoListItems);
    setItemId(props.todoListItemsId);
    setIsInEditMode(false);
  }, [props]);
  
  const updateItem = async (id, item) => {
    const itemDoc = doc(db, "todo-react-app", id);
    const newFields = {item: item};
    await updateDoc(itemDoc, newFields);

    changeEditMode();
  };

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "todo-react-app", id);
    await deleteDoc(itemDoc);
  };

  const changeEditMode = () => {
    setIsInEditMode(isInEditMode ? false : true);    
  }

  return (
    <Card >

      <Card.Content>
        <Card.Description className='todoListItems'>
          { isInEditMode ? 
            <div>
              <Input className='ui input focus' type="text" defaultValue={ item } onChange={(event => {setItem(event.target.value) } )} ></Input>
              <Button className='ui red basic button' onClick={() => { changeEditMode() } }  > X </Button>
            </div>
            : 
            <div onClick={changeEditMode}>
              <strong> { item } </strong>
            </div> 
          } 
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => { updateItem(itemId, item) } } >
            Update
          </Button>
          <Button basic color='red'onClick={() => { deleteItem(itemId) } } >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TodoItems;
