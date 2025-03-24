//Props-   we can use type alias or interface(shape of object)

// const Box = ({ heading }: { heading: string }) => {
//   return <div>{heading}</div>;
// };

// export default Box;

//^ Props with type alias

// type PropType = {
//   heading: string;
//   count: number;
//   fun1: (a: string, b?: string) => void; //call signature
// };

// const Box = ({ heading, count, fun1 }: PropType) => {
//   fun1("rock"); //fun call where value pass
//   return (
//     <>
//       <div>{heading}</div>
//       {count}
//     </>
//   );
// };

// export default Box;

//^ props with interface

import { ReactNode } from "react";
interface PropType {
  heading: string;
  count?: number; //optional
  fun1: (a: string) => void; //call signature
  children: ReactNode; //*  Where ReactElement only represents JSX, ReactNode represents everything that can be rendered. , here children type define ReactNode
}

const Box = ({ heading, count = 4, fun1, children }: PropType) => {
  //default value of count 4 execute when no count value in props
  fun1("rock"); //fun call where value pass
  return (
    <>
      <div>{heading}</div>
      {count && <p>{count}</p>}
      {children}
    </>
  );
};

export default Box;
