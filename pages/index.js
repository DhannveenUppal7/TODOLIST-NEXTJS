import Head from 'next/head';
import Image from 'next/image';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import { useState, useEffect } from "react";

export default function Home() {
  let prevTodo = [];
  try {
    if (localStorage.getItem("todos") === null) {
      prevTodo = [];
    }
    else {
      prevTodo = JSON.parse(localStorage.getItem("todos"));
    }
  } catch (err) {
    
  }
  

  const [todos, setTodos] = useState(prevTodo);
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      
    }
  }, [todos])

  const addTodo = (title, description) => {
    let index;
    if(todos.length === 0){
      index = 0;
    }
    else {
      index = todos[todos.length - 1].index + 1;
    }
    const newTodo = {
      index: index,
      title: title,
      description: description
    }
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (todo, title, description) => {
    setTodos(todos => todos.map((todoMap) => todoMap===(todo.index) ? {
      id: todoMap.id,
      title: title,
      description: description  
    } : todoMap));
    console.log(todos);
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", todos); 
  }

  return (
    <div>
      <Head>
        <title>TODO-LIST</title>
        <meta name="description" content="Made by Dhannveen Uppal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mx-4 mt-10 text-center font-bold'>
        <h1 className="text-4xl">Dhannveen's Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <hr />
        <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </div>
  )
}
