import './App.css'
import Counter from "./Counter.jsx";
import Numbers from "./Numbers.jsx";

function App() {
 
 const handleClick = (text) => {
  console.log(text)
 }
 
 const stopLink = (e) => {
  e.preventDefault()
 }
 
 return (<>
   <button onClick={() => handleClick("coucou")}>Click me !</button>
   <a onClick={stopLink} href={"https://google.fr"}>Lien</a>
   <Numbers/>
   <Counter/>
  </>)
}

export default App