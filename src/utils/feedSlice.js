import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        setFeed: (state, action) => action.payload,
        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter((user) => user._id !== action.payload);
            return newFeed;
        },
    }
})


export const { setFeed, removeUserFromFeed } = feedSlice.actions
export default feedSlice.reducer;

