import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header/Header'
import TodoListItem from './TodoListItem'

/*
    return <TodoListItem key={todo.id} todo={todo} />
*/
const TodoList = () => {
  const todos = useSelector(state => state.todos)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return (
    <div>
      <Header />
      <ul className="todo-list">{renderedListItems}</ul>
    </div>
    )
}

export default TodoList
