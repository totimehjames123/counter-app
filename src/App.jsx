import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter'

function App() {

  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className='body'>
        <div className='frame'>
          <h1>
            Counter App <br />
             <small>With Redux</small>
          </h1>
          <div className='count'>
            {count}
          </div>
          
          <div className='buttons-container'>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(33))}>+33</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
