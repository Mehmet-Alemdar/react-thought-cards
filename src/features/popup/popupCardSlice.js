import { createSlice } from "@reduxjs/toolkit";

export const popupCardSlice = createSlice({
  name:'popupCard',
  initialState: {
    value: false
  },
  reducers: {
    openPopupCard: (state, action) => {
      state.value = true
    },
    closePopupCard: state => {
      state.value = false
    },
    togglePopupCard: state => {
      state.value = state.value ? false : true
    }
  }
})

export const { openPopupCard, closePopupCard, togglePopupCard } = popupCardSlice.actions

export default popupCardSlice.reducer