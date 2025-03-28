import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./CountSlice";

export const Store = configureStore({ reducer: reducer });
