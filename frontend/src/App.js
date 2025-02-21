import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = "https://backend-production-0db9.up.railway.app";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fetch todos on component mount
  useEffect(() => {
    axios.get(baseUrl)
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Add a new todo
  const addTodo = () => {
    axios.post(baseUrl, { number: todos.length + 1, description: newTodo })
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo("");  // Clear input after submission
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <div key={todo.id}>{todo.number}. {todo.description}</div>
      ))}
      <input
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoApp;
