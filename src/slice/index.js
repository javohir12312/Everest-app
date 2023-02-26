import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataArray: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.dataArray.push(action.payload);
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;