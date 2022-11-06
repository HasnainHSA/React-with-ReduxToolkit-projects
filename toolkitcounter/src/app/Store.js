import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Counterslices'

// redux toolkit store
export const store = configureStore({
  reducer: { counterSlice },
})