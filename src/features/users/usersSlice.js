import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", name: "muhammed riza" },
  { id: "2", name: "ahamed" },
  { id: "3", name: "kabeer" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
