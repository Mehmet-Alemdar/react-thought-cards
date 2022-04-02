import { createSlice } from "@reduxjs/toolkit";

export const popupFormSlice = createSlice({
  name : 'popupForm',
  initialState: {
    value: false
  },
  reducers: {
    openPopup: state => {
      state.value = true
    },
    closePopup: state => {
      state.value = false
    }
  }
})

export const { openPopup, closePopup } = popupFormSlice.actions

export default popupFormSlice.reducer