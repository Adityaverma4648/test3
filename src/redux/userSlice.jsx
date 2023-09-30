import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    loading : true,
    user : [],
    singleUser : {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     getUser : (state , action)=>{
        state.user = action.payload;
        state.loading = false;
     },
     getSingleUser : (state , action)=>{
       state.getSingleUser = action.payload;
       state.loading = false;
     }
  }
});

export const { getUser , getSingleUser } = userSlice.actions;
export default userSlice.reducer;