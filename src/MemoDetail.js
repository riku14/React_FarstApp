// MemoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MemoDetail = () => {
  const { memoId } = useParams(); // URLパラメータからmemoIdを取得
  const memos = useSelector((state) => state.memo);

  const memo = memos.find((memo) => memo.id === Number(memoId)); // memoIdを元にメモを探す

  if (!memo) {
    return <div>メモが見つかりません</div>;
  }

  return (
    <div>
      <h1>Memo Detail</h1>
      <p>ID: {memo.id}</p>
      <p>Text: {memo.Text}</p>
    </div>
  );
};

export default MemoDetail;
