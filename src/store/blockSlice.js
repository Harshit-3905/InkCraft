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
    moveBlock: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedBlock] = state.splice(sourceIndex, 1);
      state.splice(destinationIndex, 0, movedBlock);
    },
  },
});

export const { addBlock, removeBlock, updateBlock, moveBlock } =
  blockSlice.actions;

export default blockSlice.reducer;
