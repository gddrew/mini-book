import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { data } from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

// Syntax prior to React 18, results in an error in React 18:
// ReactDOM.render(<Greeting />, document.getElementById('root'))

// React 18:
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<BookList />)
