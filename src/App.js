import Cell from "./components/Cell"
import './App.css';
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  const [order,setOrder]=useState([])
  const [deactivating ,setDeactivating]=useState(false)
  const config=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const deactivateCells=()=>{
setDeactivating(true)
const timer=setInterval(()=>{
setOrder((prevState)=>{
 const newOrder=prevState.slice();
 newOrder.pop()
 if(newOrder.length===0){
  clearInterval(timer)
  setDeactivating(false)
 }
 return newOrder
})
},300)

  }


  const activateCells=(index)=>{
    const newOrder=[...order,index]
    console.log(newOrder)
    setOrder(newOrder);

    if(newOrder.length===config.flat(1).filter(Boolean).length ){
      deactivateCells()
    }
  }
  return (
    <div className="wrapper">
     <div className="grid"
      style={{gridTemplateColumns:`repeat(${config[0].length},1fr)`}} >
      {config.flat(1).map((value,index)=>{
       return  value?<Cell key={uuidv4()} filled={order.includes(index)}
        onClick={()=>activateCells(index)} isDisabled={deactivating || order.includes(index)} />
     :<span key={uuidv4()}/>
    })}
     </div>
    </div>
  );
}

export default App;
