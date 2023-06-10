import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const typingText = useSelector(state => state.typing.text);
  const keysPressed = useSelector(state => state.typing.keysPressed);
  const accuracy = useSelector(state => state.typing.accuracy);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { value } = e.target;
    dispatch({ type: 'SET_TYPING_TEXT', payload: value });
  };

  return (
    <div>
      <h1>Touch Typing Practice</h1>
      <input type="text" value={typingText} onChange={handleInputChange} />

      <div>
        <p>Keys to type next: {typingText}</p>
        <p>Keys pressed: {keysPressed}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
    </div>
  );
};

export default App;
