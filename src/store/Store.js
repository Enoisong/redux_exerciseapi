import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../redux/userSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
    },
});
export default store;