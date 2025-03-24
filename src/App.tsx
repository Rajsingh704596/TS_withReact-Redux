import "./App.css";
import UseState, { UseState2 } from "./assets/reactTs-basic/hooks/UseState";
import Box from "./assets/reactTs-basic/Props";

function App() {
  // const handleFun1 = (a: string) => {
  //   console.log(`fun pass as prop ${a}`);
  // };
  return (
    <>
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
    </>
  );
}

export default App;
