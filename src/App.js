import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import MemoDetail from './MemoDetail'
import AddMemo from './AddMemo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:memoId" element={<MemoDetail />} /> 
      <Route path="/add" element={<AddMemo />} />
    </Routes>

    
  )
}

export default App