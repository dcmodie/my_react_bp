//import { client } from '../../api/client'

const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]



function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}
export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      console.log('todoAdded: ');

      const newState = [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]

      return newState;
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    default:
      return state
  }
}

// Thunk function
// export async function fetchTodos(dispatch, getState) {
//   const response = await client.get('/fakeApi/todos')
//   dispatch({ type: 'todos/todosLoaded', payload: response.todos })
// }