import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blockSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action) => {
      state.push(action.payload);
    },
    removeBlock: (state, action) => {
      return state.filter((block) => block.id !== action.payload);
    },
    updateBlock: (state, action) => {
      const index = state.findIndex((block) => block.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addBlock, removeBlock, updateBlock } = blockSlice.actions;

export default blockSlice.reducer;
