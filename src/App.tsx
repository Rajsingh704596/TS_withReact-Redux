import "./App.css";
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
    </>
  );
}

export default App;
