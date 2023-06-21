import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import usersSlice from "../redux/usersSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
    },
});
export default store;