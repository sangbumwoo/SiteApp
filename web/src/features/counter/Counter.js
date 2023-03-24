import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount, decrement } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      counter a: {count}
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3))
        }}
      >
        Plus 3
      </button>
    </div>
  )
}
