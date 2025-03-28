//^ ConfigureStore with createAction, createReducer

// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// interface StateType {
//   count: number;
// }

// const increment = createAction("increment");
// const decrement = createAction("decrement");

// const initialState: StateType = { count: 0 };

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

// export const Store = configureStore({ reducer: rootReducer });

//^ Configure store with createSlice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}

const initialState: StateType = { count: 0 };

//create slice -

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  rootSlice.actions;

export const reducer = rootSlice.reducer;

// Derive the root state type
//type Custom = ReturnType<typeof Store.getState>; // if we have not use StateType(above type alias) then this line use where ReturnType use -Obtain the return type of a function type
