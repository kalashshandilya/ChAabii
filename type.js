import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Actions
const setTypingText = text => ({ type: 'SET_TYPING_TEXT', payload: text });
const setKeysPressed = keys => ({ type: 'SET_KEYS_PRESSED', payload: keys });
const calculateAccuracy = () => ({ type: 'CALCULATE_ACCURACY' });

// Reducer
const initialState = {
  typing: {
    text: '',
    keysPressed: 0,
    accuracy: 100,
  },
};

const typingReducer = (state = initialState.typing, action) => {
  switch (action.type) {
    case 'SET_TYPING_TEXT':
      return { ...state, text: action.payload };
    case 'SET_KEYS_PRESSED':
      return { ...state, keysPressed: action.payload };
    case 'CALCULATE_ACCURACY':
      const { text, keysPressed } = state;
      const accuracy = calculateAccuracyPercentage(text, keysPressed);
      return { ...state, accuracy };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  typing: typingReducer,
  // Add other reducers if needed
});

// Sagas
function* typingSaga() {
  yield takeLatest('SET_KEYS_PRESSED', calculateAccuracySaga);
}

function* calculateAccuracySaga() {
  yield put({ type: 'CALCULATE_ACCURACY' });
}

// Utility function to calculate accuracy percentage
function calculateAccuracyPercentage(expected, actual) {
  if (expected.length === 0) return 100;

  const errors = levenshteinDistance(expected, actual);
  const accuracy = ((expected.length - errors) / expected.length) * 100;
  return accuracy.toFixed(2);
}

// Utility function to calculate Levenshtein distance
function levenshteinDistance(expected, actual) {
  const m = expected.length;
  const n = actual.length;

  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0
