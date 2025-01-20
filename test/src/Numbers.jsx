import Number from "./Number.jsx";

const Numbers = ( ) => {
 const numbers = [7, 21, 45];
 return (
  <ul>
   {
    numbers.map((num, i) => {
     return <Number num={num} key={i}/>
    })
   }
  </ul>
 )
}

export default Numbers