import { createSlice } from "@reduxjs/toolkit";


const memoSlice = createSlice({
    name: 'memo',
    initialState: [],
    reducers: {
        addMemo: (state, action) => {
            state.push(action.payload);
        },
        deleteMemo: (state, action) => {
            return state.filter(memo => memo.id !== action.payload);
        },
    },
});

export const { addMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer;