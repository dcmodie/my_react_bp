import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/todosList'
import PersonalInfoPage from './features/personalInfo/PersonalInfoPage'
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import './index.css'


function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>My Boilerplate</h1>
          <Link to="/personal-info">Personal Info</Link>
          <Link to="/todo-list">Todo List</Link>
        </section>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">  
            <PersonalInfoPage />
          </Route>
          <Route path="/todo-list">  
            <TodoList />
          </Route>
          <Route path="/personal-info">  
            <PersonalInfoPage />
          </Route>
        </Switch>

      </section>
    </div>
  )
}

export default App
