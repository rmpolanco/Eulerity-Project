import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  value: {},
  status: 'idle',
};

export const urlSlice = createSlice({
  name: 'selectedUrls',
  initialState,

  reducers: {

    addUrl: (state, action) => {
      state.value[action.payload.id] = action.payload.image;
    },
    removeUrl: (state, action) => {
      delete state.value[action.payload];
    },
    removeAll: (state) => {
      delete state.value;
      state.value = {};
    }
  }
});

export const { addUrl,removeUrl,removeAll } = urlSlice.actions;

export const selectUrls = (state) => state.counter.value;


export default urlSlice.reducer;
