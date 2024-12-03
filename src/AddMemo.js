// AddMemo.js
import React, { useState } from 'react';
import { addMemo } from './Redux/memoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddMemo = () => {
  const [memoText, setMemoText] = useState('');
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo); // Reduxの状態を取得
  const navigate = useNavigate();

  const handleAddMemo = () => {
    dispatch(addMemo({ id: Date.now(), Text: memoText }));
    setMemoText('');
  };

  const goToDetails = (memoId) => {
    navigate(`/details/${memoId}`); // メモのIDをURLパラメータとして渡す
  };

  return (
    <div>
      <h1>AddMemo</h1>
      <input
        type="text"
        value={memoText}
        onChange={(e) => setMemoText(e.target.value)}
      />
      <button onClick={handleAddMemo}>メモ作成</button>
      <h2>Memo List</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            {memo.Text} <button onClick={() => goToDetails(memo.id)}>詳細</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddMemo;
