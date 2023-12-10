import { configureStore } from "@reduxjs/toolkit";
import showLogin from "@/features/showLogin";
const store = configureStore({
  reducer: {
    showLogin,
  },
});
export default store;
