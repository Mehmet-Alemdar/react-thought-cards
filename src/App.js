import './App.css';
import Thoughts from './components/Thoughts';
import {useDispatch, useSelector} from 'react-redux';
import {openPopup} from './features/popup/popupFormSlice'

function App() {
  const dispatch = useDispatch()

  const popupCardValue = useSelector(state => state.popupCard.value)

  const handleClick = () => {
    dispatch(openPopup())
  }

  return (
    <div className='app'>
      <header>
        <p>Your Thoughts</p>
      </header>
      <Thoughts />
      <button className={popupCardValue ? 'addThoughtButtonNone' : 'addThoughtButton'} onClick={handleClick}>Throw Thought</button>
    </div>
  );
}

export default App;
