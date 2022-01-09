import React, { useState } from 'react'
import {
  Button,
  Form,
  FormField,
  Input,
  Label,
} from 'semantic-ui-react'
import { db } from "../firebase/index";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function CreateItem () {
    const [newItem, setNewItem] = useState("");

    const todoListCollectionRef = collection(db, "todo-react-app");

    const createItem = async () => {
        await addDoc(todoListCollectionRef, { item: newItem });    
    };

    

    return (
        <Form>
            <Form.Group widths='equal'>
                <FormField>
                    <Label basic color='blue' > Add new item on your Todo List </Label>
                    <Input className='ui input focus' placeholder='New Item' onChange={(event => {setNewItem(event.target.value) } )} ></Input>
                </FormField>
            </Form.Group>

            <FormField>
                <Button basic color='blue' onClick={ createItem }>Add</Button>
            </FormField>
        </Form>
    );
}
export default CreateItem;
