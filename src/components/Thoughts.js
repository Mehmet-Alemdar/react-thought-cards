import {useSelector, useDispatch} from 'react-redux'  
import { removeThought, updateThought} from '../features/thought/thoughtSlice'
import { openPopupEdit, closePopupEdit } from '../features/thought/thoughtSlice'
import { openPopupCard, closePopupCard } from '../features/popup/popupCardSlice'

function Thoughts() {
  const dispatch = useDispatch()

  const thoughts = useSelector(state => state.thought.thoughts)

  console.log(thoughts)

  const handleClickOpenPopup = (thought, index) => {
    dispatch(openPopupEdit({thought, index}))
    dispatch(openPopupCard())
  }

  const handleClickClosePopup = (thought, index) => {
    dispatch(closePopupEdit({thought, index}))
    dispatch(closePopupCard())

    const input = document.getElementById(index+'_updateTitle')
    const content = document.getElementById(index+'_updateContent')
    input.value = thought.title
    content.value = thought.content
  }

  const handleClickRemoveThought = (thought, index) => {
    dispatch(removeThought({thought, index}))
    dispatch(closePopupCard())
  }

  const handleClickUpdateThought = (index) => {
    const title = document.getElementById(index+'_updateTitle').value
    const content = document.getElementById(index+'_updateContent').value
    const thought = {
      title,
      content
    }
    dispatch(updateThought({thought, index}))
    dispatch(closePopupEdit({thought, index}))
    dispatch(closePopupCard())
  }
  
  const thoughtItems = thoughts.map((thought, index) => 
    <div key={index} className={thought.popupEdit ? 'thoughtCardEdit' : 'thoughtCard'} >
      <button 
        className='buttonRemove' 
        onClick={() => handleClickRemoveThought(thought, index)}>
          delete
      </button>
      <button 
        className={thought.popupEdit ? 'closeButton' : 'closeButtonNone'} 
        onClick={() => handleClickClosePopup(thought, index)}>
        X
      </button>
      <div onClick={() => handleClickOpenPopup(thought, index)}>
        <input 
          id={index+'_updateTitle'}
          className={thought.popupEdit ? 'cardInputTitleEdit'  : 'cardInputTitle' }
          defaultValue={thought.title}>
        </input>
        <hr />
        <div className={thought.popupEdit ? 'contentContainerOpened'  : 'contentContainer' }>
          <textarea 
            id={index+'_updateContent'}
            className={thought.popupEdit ? 'cardInputTextareaEdit'  : 'cardInputTextarea' }
            defaultValue={thought.content}
            rows="10" 
            cols="40"
            >
          </textarea>
        <p >{thought.date}</p>
        </div>
      </div>
      <button 
        className={thought.popupEdit ? 'buttonUpdateVisible' : 'buttonUpdateInvisible'}
        onClick={() => handleClickUpdateThought(index)}>
          Update
      </button>
    </div>
  )

  return (
    <div className="thoughts">
      {thoughtItems}
    </div>
  )

}

export default Thoughts