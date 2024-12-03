

import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMemo } from './Redux/memoSlice'

const Home = () => {
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate('/details')
  }

  function goToAddMemo() {
    navigate('/add')
  }
    
  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToDetails}>メモ詳細</button>
      <button onClick={goToAddMemo}>メモ追加</button>
    </div>
  )
}

export default Home