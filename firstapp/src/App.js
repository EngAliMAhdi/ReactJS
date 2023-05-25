import Main from './Main'
import React,{useState} from 'react'
import './App.css'
function App() {
  return (
    <div >
      <Mybtn/>
      <br/>
      <Mylist/>
     {/* <Header title="Header"  />
      <Main title="Mainnnnnnnnnnnnnnnnnnn"/>
     <Footer /> */}
    </div>
  );
}
function Mylist(){
  let myArray=["HTML","CSS","PHP"]
  return(<ol>
          {myArray.map(
            (item,index)=><li key={index}>{item}</li>
          )}
        </ol>)
}
function Mybtn(){
 const [count,setCount]=useState(10);
//  function increment(){
//   setCount(count+1)
//  }
//  function decrement(){
//   setCount(count-1)
//  }
  return(<div>
    {count}
    <br/>
    <button onClick={()=>setCount(count+1)}>++</button>
    <button onClick={()=>setCount(count-1)}>--</button>
  </div>)
}
function Header({title}) {
  return(
    <header>
      {title} Page% 
    </header>
  )
}

function Footer() {
  return(
    <footer>
      Footer Page
    </footer>
  )
}

export default App;
