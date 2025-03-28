import "./App.css";
import Consumer from "./assets/reactTs-basic/hooks/useContext/Consumer";
import { ContextProvider } from "./assets/reactTs-basic/hooks/useContext/ContextStore";
import UseReducerCount2, {
  UseReducer,
} from "./assets/reactTs-basic/hooks/useReducer/UseReducerCount";
import UseState, { UseState2 } from "./assets/reactTs-basic/hooks/UseState";
import UseStateForm from "./assets/reactTs-basic/hooks/UseStateForm";
import Box from "./assets/reactTs-basic/Props";
import Count from "./assets/reduxToolkit-ts/Count";

function App() {
  // const handleFun1 = (a: string) => {
  //   console.log(`fun pass as prop ${a}`);
  // };
  return (
    <>
      <ContextProvider>
        <Box
          heading={"hi"}
          count={2}
          fun1={(a) => {
            console.log(`fun pass as prop ${a}`);
          }}
        >
          <p>children pass as a props</p>
          <button>click</button>
        </Box>

        <UseState />
        <UseState2 />

        <UseStateForm />

        <UseReducer />
        <UseReducerCount2 />

        <Consumer />
      </ContextProvider>

      <Count />
    </>
  );
}

export default App;
