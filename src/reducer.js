import { combineReducers } from 'redux'

import todosReducer from './features/todos/TodosSlice'
import filtersReducer from './features/filters/filtersSlice'
import personalInfo from './features/personalInfo/PersonalInfoSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
  personalInfo: personalInfo
})

export default rootReducer