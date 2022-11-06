import React from 'react'
//import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement, incrementByAmount, rest } from './app/Counterslices'
import './App.css'

const App = () => {
//  const [counter, setCounter] = useState(0)

  const counter = useSelector((state)=>state.counterSlice.num)
  const dispatch = useDispatch()
 
  // const increment = () => {
  //   setCounter(counter+1)
  // }
  // const decrement = () => {
  //   setCounter(counter-1)
  // }

  return (
    <>
    <div className='wrapper'>
      <h1>Counter App</h1>
      <h2>using redux toolkit</h2>
      <div className='conuter_con'>
    <button className='minus' onClick={()=>dispatch(decrement())}>-</button>
    <div className='count'>{counter}</div>
    <button className='plus' onClick={()=>dispatch(increment())}>+</button>
    </div>
    <button className='icrement20' onClick={()=>dispatch(incrementByAmount(20))}>20</button>
    <button className='rest' onClick={()=>dispatch(rest())}>rest</button>
    </div>
    <h6>made by Hasnain.HSA</h6>
    </>
  )
}

export default App