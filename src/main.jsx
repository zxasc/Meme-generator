import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Form from './Components/Form'

function App() {
  return (
    <main className='App'>
      <Header />
      <Form />
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
