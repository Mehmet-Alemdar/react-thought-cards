import { configureStore } from '@reduxjs/toolkit'
import popupFormReducer from '../features/popup/popupFormSlice'
import thoughtReducer from '../features/thought/thoughtSlice'
import popupCardReducer from '../features/popup/popupCardSlice'
export default configureStore({
  reducer: {
    popupForm: popupFormReducer,
    thought: thoughtReducer,
    popupCard: popupCardReducer
  }
})