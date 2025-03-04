import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getResume } from '@/api/app'

const initialState = {
  resumeConfig: {},
  theme: {
    themeColor:'#273f75'
  },
  sideOpen:false
}

export const getResumnAsync = createAsyncThunk('app/getResumn', getResume)

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setResumn(state, {payload}) {
      state.resumeConfig = payload
    },
    setTheme(state, {payload}) {
      state.theme = payload
    },
    setSideOpen(state, {payload}) {
      state.sideOpen = payload
    },
  },
  extraReducers(buildind) {
    buildind.addCase(getResumnAsync.fulfilled, (state, {payload}) => {
      state.resumeConfig  = JSON.parse(payload.data.content)
    })
  },
})

export const { setResumn, setTheme,setSideOpen } = appSlice.actions

export default appSlice.reducer
