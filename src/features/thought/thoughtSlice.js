import { createSlice } from "@reduxjs/toolkit";
import { latestDate } from "../../lib/createDate";

export const thoughtSlice = createSlice({
  name: 'thought',
  initialState: {
    thoughts: []
  },
  reducers: {
    addThought: (state, action) => {
      state.thoughts.push({
        ...action.payload
      })
    },
    removeThought: (state, action) => {
      return {...state,
        thoughts: state.thoughts.filter((element, index) => index !== action.payload.index)}
    },
    updateThought: (state, action) => {
      return {...state,
        thoughts: state.thoughts.map((thought, index) => index === action.payload.index ? {...thought, title: action.payload.thought.title, content: action.payload.thought.content, date: latestDate()} : thought)}
    },
    openPopupEdit: (state, action) => {
      return {...state,
      thoughts: state.thoughts.map((thought, index) => index === action.payload.index ? {...thought, popupEdit: true} : thought)}
    },
    closePopupEdit: (state, action) => {
      return {...state,
      thoughts: state.thoughts.map((thought, index) => index === action.payload.index ? {...thought, popupEdit: false } : thought)}
    }
  }
})

export const {addThought, removeThought, updateThought, openPopupEdit, closePopupEdit} = thoughtSlice.actions

export default thoughtSlice.reducer