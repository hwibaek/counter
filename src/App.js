import React, {useState} from "react"; 
export const App = () => {
  let [count, setter] = useState(0);
  const Change = (value) => count = setter(count + value);
  return(
      <div>
        <h1>count : {count}</h1>
        <button onClick={() => {Change(1)}}>+</button>
        <button onClick={() => {Change(-1)}}>-</button>
      </div>
  );
}