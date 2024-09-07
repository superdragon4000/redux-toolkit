import React from 'react';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch()

  console.log(increment(5))

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment(10))}>increment</button>
    </div>
  );
}

export default App;
