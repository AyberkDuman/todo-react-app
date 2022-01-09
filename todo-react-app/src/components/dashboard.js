import { useState, useEffect } from "react";
import UserInfo from "./userInfo"
import TodoItems from "./todoItems";
import CreateItem from "./createItem";
import { Container, Card } from "semantic-ui-react";
import { db } from "../firebase/index";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { useUserContext } from "../context/userContext";
import "../index.css";


const Dashboard = () => {
    const { user, logoutUser} = useUserContext ();
  
    const [todoList, settodoList] = useState([]);
    const todoListCollectionRef = collection(db, "todo-react-app");
  
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
            <div >

          <div className='ui centered grid'>
            <UserInfo 
              userName = {user.displayName}   
              onClick = {logoutUser}
            />
            </div>
            </div>
            <hr className="myhrline"></hr>
            <CreateItem/>
          </Container>
              
          <Container>
            <Card.Group >
            { todoList.map((todoItems) => {
              return (
                <TodoItems
                todoListItems =  {todoItems.item }  
                todoListItemsId = { todoItems.id }
                />
              );
            }) }   
            </Card.Group>  
          </Container>                       
              
        </div>      
    );
  }
  
  export default Dashboard;