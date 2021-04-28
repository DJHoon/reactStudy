import Store from './redux'
import {INCREMENT, DECREMENT} from "./constant";

export const testINCREASE = (data) => ({type: INCREMENT, data})
export const testDECREASE = (data) => ({type: DECREMENT, data})
