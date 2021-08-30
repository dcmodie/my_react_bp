import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/todosList'
import PersonalInfoPage from './features/personalInfo/PersonalInfoPage'

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
        <Header />
        <TodoList />

      </section>
    </div>
  )
}

export default App
