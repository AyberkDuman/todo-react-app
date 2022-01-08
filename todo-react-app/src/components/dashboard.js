import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import UserInfo from "./userInfo"
import TodoItems from "./todoItems";
import CreateItem from "./createItem";
import { Container, Card } from "semantic-ui-react";
import { db } from "../firebase/index";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useUserContext } from "../context/userContext";
import "../index.css";
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react'

const Dashboard = ({children}) => {
    const { user, logoutUser} = useUserContext ();
    const [newItem, setnewItem] = useState("");
  
    const [todoList, settodoList] = useState([]);
    const todoListCollectionRef = collection(db, "todo-react-app");
  
    const createTodoList = async () => {
      await addDoc(todoListCollectionRef, { item: newItem });
    };
  
    const updateTodoList = async (id) => {
      const TodoListDoc = doc(db, "todo-react-app", id);
      await updateDoc(TodoListDoc);
    };
  
    const deleteTodoList = async (id) => {
      const TodoListDoc = doc(db, "todo-react-app", id);
      await deleteDoc(TodoListDoc);
    };
  
    useEffect(() => {
      const gettodoList = async () => {
        const data = await getDocs(todoListCollectionRef);
        settodoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      gettodoList();
    }, []);
  
    return (
        <div>
          <Container>
          <UserInfo 
            userName = {user.displayName}   
            onClick = {logoutUser}
          />

          <CreateItem 
          />

          </Container>
            
            
            <Container>
              <Card.Group >
              { todoList.map((todoItems) => {
                return (
                    <TodoItems
                      todoListItems =  {todoItems.item }  
                    />
                );
              }) }   
              </Card.Group>                         
            </Container>
 
            
        </div>
        

        
            
    );
  }
  
  export default Dashboard;