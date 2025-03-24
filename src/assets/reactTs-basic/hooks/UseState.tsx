//! UseState with TypScript and Generic types (T)

//@@ Worst approach 1 (When child needs direct control over state updates)
import { Dispatch, SetStateAction, useState } from "react";

const UseState = () => {
  const [input, setInput] = useState<string>(""); // State defined in parent

  return (
    <>
      <div>UseState child component setter fun update state </div>
      <Form label="Search" inputValue={input} setInput={setInput} />
      <div>{input}</div>
    </>
  );
};

export default UseState;

//^ Form component

type InputValueType = string | number; //type alias use where type will be string or number

const Form = <T extends InputValueType>({
  //Generic type define in React like this <T, > or <T extends typeAlias > , so it not give error , here extends (inherit that type )
  label,
  inputValue,
  setInput,
}: {
  label: string;
  inputValue: T; // Generic type (T can be string or number)
  setInput: Dispatch<SetStateAction<T>>; // Setter function with generic type
}) => {
  return (
    <>
      <form>
        <label htmlFor="input">{label}</label>
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInput(e.target.value as T)} // type assertion use (as )     // Update parent state
        />
      </form>
    </>
  );
};

//@@ 2nd way- Best approach (When parent should handle logic before updating state)

export const UseState2 = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div>UseState here parent component state update</div>
      <Form2
        label="Search"
        inputValue={input}
        onChange={(e) => setInput(e.target.value)} // ✅ Correct
      />
      <div>{input}</div>
    </>
  );
};

type InputValueTypes = string | number;

const Form2 = <T extends InputValueTypes>({
  label,
  inputValue,
  onChange,
}: {
  label: string;
  inputValue: T; // No need for generics type if always string , so here we use string instead T
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ✅ Correct type
}) => {
  return (
    <form>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={onChange} // ✅ No need for extra wrapper // No type assertion needed
      />
    </form>
  );
};

//!# **State Management Approaches in React with TypeScript**

// ## **Key Differences**
// 1. **Approach 1 (UseState)**
//    - Parent passes `setState` directly to child
//    - Child updates state directly (`setInput(e.target.value as T)`)
//    - Requires type assertion (`as T`)
//    - Breaks separation of concerns (child knows about state)

// 2. **Approach 2 (UseState2) ✅ Recommended**
//    - Parent passes custom handler (`onChange`)
//    - Parent maintains control of state updates
//    - Cleaner TypeScript (no type assertions)
//    - Better separation of concerns

// ## **Best Practice**
// **Always prefer Approach 2** unless:
// - Child component truly needs direct state access
// - Building highly reusable generic components

// **Why Approach 2 wins:**
// 1. Parent maintains state control
// 2. Cleaner TypeScript typing
// 3. Better component architecture
// 4. Easier to maintain and debug
