import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url:{},
    genres:{}
  }

  export const homeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      getUrl: (state,action) => {
        state.url = action.payload
      },
      getGenres: (state,action) => {
        state.genres = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getUrl, getGenres } = homeSlice.actions
  
  export default homeSlice.reducer