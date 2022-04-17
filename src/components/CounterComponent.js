import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/counter/CounterSlice";

const CounterComponent = () => {
    const counter= useSelector(state => state.counter);
    const dispatch=useDispatch()
    const [inputValue,setInputValue]=useState("")
  return (
    <>
    <div>CounterComponent</div>
    <div>counter : { counter.value}</div>
    <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}  />
    <button onClick={()=>dispatch(increment(Number(inputValue)|1))}>+</button>
    <button onClick={()=>dispatch(decrement(Number(inputValue)|1))}>-</button>

    </>
  )
}

export default CounterComponent