import { createSlice } from '@reduxjs/toolkit'
import menuData from './menuData'

const initialState = {
  list: menuData,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
})

export default menuSlice.reducer
