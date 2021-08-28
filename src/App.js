import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/todosList'

function App() {
  return (
    <div className="App">
      <nav>
        <section>

          <h1>hhhhh Example</h1>
          <div className="navContent">
            <div className="navLinks"></div>
            
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
        <Header />
        <TodoList />

      </section>
    </div>
  )
}

export default App
