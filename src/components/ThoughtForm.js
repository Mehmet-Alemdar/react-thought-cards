import { useSelector, useDispatch } from 'react-redux'
import { closePopup } from '../features/popup/popupFormSlice'
import { addThought } from '../features/thought/thoughtSlice'
import { latestDate } from '../lib/createDate'

function ThoughtForm () {
  const dispatch = useDispatch()

  const popupForm = useSelector(state=> state.popupForm.value)
  
  const handleClick = () => {
    
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const popupEdit = false
    const date = latestDate()

    const thought = {
      title,
      content,
      popupEdit,
      date
    }

    dispatch(addThought(thought))

    dispatch(closePopup())
  }
  
  return (
    <div> 
      {
        popupForm && 
        <div className='bg'>
          <div className="thoughtForm">
            <form className="form">
              <input
                type='text' 
                id='title' 
                className='formInputTitle' 
                placeholder='Title'
                maxLength="50">
              </input> 
              <br />
              <hr className='hrForm'/>
              <textarea 
                id='content' 
                className='formTextareaContent' 
                rows="10" 
                cols="40"
                placeholder='Write Your Thought'
                >
              </textarea> 
            </form>
            <button
              className='buttonAdd'
              type='button' 
              onClick={handleClick}>
                Yes I Think So
            </button>
            <br />
            <button
              className='buttonClose'
              onClick={() => dispatch(closePopup())}>
                Nevermind
            </button>
          </div>
        </div>

      }
    </div>
  )
}

export default ThoughtForm