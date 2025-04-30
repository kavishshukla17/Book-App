import React from 'react'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import ViewBook from './components/ViewBook'
import DeleteBook from './components/DeleteBook'
import SearchBook from './components/SearchBook'
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'
import './App.css'
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/add">Add Book</Link>
          <Link to="/view">View Book</Link>
          <Link to="/search">Search Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </nav>
        <Routes>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/view' element={<ViewBook/>}/>
          <Route path='/delete' element={<DeleteBook/>}/>
          <Route path='/search' element={<SearchBook/>}/>
          <Route path='/update' element={<UpdateBook/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App