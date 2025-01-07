import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        setFeed : (state, action) => action.payload,
        resetFeed: (state,action) =>  null,
    }
})


export const { setFeed, resetFeed} = feedSlice.actions
export default feedSlice.reducer;

