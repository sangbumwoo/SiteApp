import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount, decrement } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      counter a: {count}
      <button type="button" onClick={() => dispatch(increment())}>Plus</button>
      <button type="button" onClick={() => dispatch(decrement())}>Minus</button>
      <button
        type="button"
        onClick={() => {
          dispatch(incrementByAmount(3))
        }}
      >
        Plus 3
      </button>
    </div>
  )
}
