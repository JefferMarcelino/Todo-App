import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const useTodoContext = () => React.useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [ todos, setTodos ] = useState(() => {
    const storedTodos = localStorage.getItem('tasks');

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos));
  }, [ todos ]);

  const addTodo = (task) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000000),
      task,
      did: false
    };

    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, did: !todo.did } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      { children }
    </TodoContext.Provider>
  );
};