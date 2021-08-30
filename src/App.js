import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/todosList'
import PersonalInfoPage from './features/personalInfo/PersonalInfoPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <section>

          <h1>My Boilerplate</h1>
          <div className="navContent">
            <div className="navLinks"></div>
            
          </div>
        </section>
      </nav>
      <section>
        <Switch>
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
