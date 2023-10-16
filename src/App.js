import React, {useState, useEffect} from "react";
//import axios from 'axios';
import axiosRoute from "./apis";
import Form from "./components/Form";
import Section from "./components/Sections";
import List from "./components/List";



const appTitle = "To-Do App"

const App = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const {data} = await axiosRoute.get("/todos");
      setTodoList(data);
    }
    fetchData().then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const addTodo = async (item) => {
    const { data } = await axiosRoute.post("/todos", item);
    setTodoList((oldList) => [...oldList, data ]);
  };

  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id));
  };
    return (
      <div className="ui container center aligned">
        <Section>
          <h1>{appTitle}</h1>
        </Section>
        <Section>
          <Form addTodo={addTodo}/>
        </Section>
        <Section>
          <List removeTodoListProp={removeTodo} list={todoList}/>
        </Section>
      </div>
    );
};

export default App;