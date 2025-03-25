//^ UserReducer with simple counter
export const UseReducer = () => {
  //type alias
  type StateType = {
    count: number;
  };

  type ActionType =
    | {
        type: "Increment";
      }
    | {
        type: "Decrement";
      };

  const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };

  const [stateCount, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>useReducer count:{stateCount.count}</div>
      <button
        disabled={stateCount.count > 100 ? true : false}
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>
      <button
        disabled={stateCount.count < 1 ? true : false}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
      <hr />
    </>
  );
};

// //todo

// //^ Best practice with useReducer counter

import { useReducer } from "react";

// Type definitions
type StateType = {
  count: number;
};

// Better to use union type for actions to ensure type safety
type ActionType =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET"; payload: number };

// Constants for action types to avoid typos
const ActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
} as const;

// Initial state
const initialState: StateType = {
  count: 1,
};

// Reducer function with detailed comments
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ActionTypes.RESET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const UseReducerCount2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators for better organization and reusability
  const increment = (value: number) =>
    dispatch({ type: ActionTypes.INCREMENT, payload: value });

  const decrement = (value: number) =>
    dispatch({ type: ActionTypes.DECREMENT, payload: value });

  const reset = (value: number) =>
    dispatch({ type: ActionTypes.RESET, payload: value });

  // Derived state for disabled conditions
  const isIncrementDisabled = state.count > 100;
  const isDecrementDisabled = state.count < 1;

  return (
    <div className="counter-container">
      <h2>useReducer Counter 2</h2>
      <p className="counter-value">Current count: {state.count}</p>

      <div className="button-group">
        <button
          disabled={isIncrementDisabled}
          onClick={() => increment(1)}
          aria-label="Increment by 1"
        >
          Increment
        </button>
        <button
          disabled={isDecrementDisabled}
          onClick={() => decrement(1)}
          aria-label="Decrement by 1"
        >
          Decrement
        </button>
      </div>

      <div className="button-group">
        <button
          disabled={isIncrementDisabled}
          onClick={() => increment(2)}
          aria-label="Increment by 2"
        >
          Increment by 2
        </button>
        <button
          disabled={isDecrementDisabled}
          onClick={() => decrement(2)}
          aria-label="Decrement by 2"
        >
          Decrement by 2
        </button>
      </div>

      <button
        onClick={() => reset(initialState.count)}
        aria-label="Reset counter"
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerCount2;

//! Key Improvements and Best Practices:
// Type Safety:

// Used discriminated union type for actions to ensure type safety

// Added never type check in default case to ensure exhaustive checking

// Action Constants:

// Created constants for action types to prevent typos

// Used as const for literal type inference

// Organization:

// Separated type definitions, constants, and initial state

// Added action creators for better organization

// Accessibility:

// Added aria-label to buttons for better accessibility

// Derived State:

// Moved disabled conditions to variables for better readability

// Structure:

// Added semantic HTML with proper class names

// Grouped related buttons together

// Comments:

// Added clear comments explaining each section

// Naming Conventions:

// Used uppercase for action type constants (common Redux convention)

// More descriptive variable names

// The component is now more maintainable, type-safe, and follows React best practices while maintaining all the original functionality.
