import {useState} from "react";

const Counter = () => {
 
 const [counter, setCounter] = useState(0);
 
 const tick = () => {
  setTimeout(() => setCounter(counter + 1), 1000);
 }
 
 tick();
 
 return(
  <>
   <div>
    {counter}
   </div>
  </>
 )
}


export default Counter