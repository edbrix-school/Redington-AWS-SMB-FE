import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: null
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userDetails = action.payload;
    }
  },
});

export const { setUserData} = userSlice.actions;

//selectors
export const selectUserData = (state) => state.user.userDetails;

export default userSlice.reducer;
