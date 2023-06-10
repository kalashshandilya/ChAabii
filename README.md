# Touch Typing Application

This is a web-based touch typing application built using React, Redux, and Redux Saga. The application allows users to practice touch typing by focusing on the 8 keys of the keyboard (asdfjkl;). It provides a typing box where users can input keys, visually displays the keys they should type next, measures the number of keys pressed in a 5-minute window, and calculates the accuracy percentage of the user's typing.

## Components

### App

The main component of the application that serves as the entry point. It renders the typing box, displays the keys to type next, and shows the number of keys pressed and accuracy percentage.

#### Props

None

#### State

- `typingText`: Holds the text value of the typing box input.
- `keysPressed`: Stores the number of keys pressed.
- `accuracy`: Represents the accuracy percentage of the user's typing.

#### Actions

- `SET_TYPING_TEXT`: Updates the `typingText` state with the input from the typing box.
- `SET_KEYS_PRESSED`: Updates the `keysPressed` state with the number of keys pressed.
- `CALCULATE_ACCURACY`: Calculates the accuracy percentage based on the expected typing text and keys pressed.

### Redux Store

The Redux store holds the application state and manages the actions and reducers.

#### State

- `typing`: Manages the typing related state, including the typing text, number of keys pressed, and accuracy.

#### Actions

- `SET_TYPING_TEXT`: Updates the typing text in the store.
- `SET_KEYS_PRESSED`: Updates the number of keys pressed in the store.
- `CALCULATE_ACCURACY`: Triggers the calculation of the accuracy percentage.

#### Reducers

- `typingReducer`: Manages the state related to typing. Handles the actions to update the typing text, number of keys pressed, and accuracy.

### Redux Saga

The application uses Redux Saga as middleware to handle external resource access asynchronously. It listens for the `SET_KEYS_PRESSED` action and triggers the `CALCULATE_ACCURACY` action.

#### Sagas

- `typingSaga`: Listens for the `SET_KEYS_PRESSED` action and triggers the `calculateAccuracySaga`.
- `calculateAccuracySaga`: Calculates the accuracy percentage by dispatching the `CALCULATE_ACCURACY` action.

### CSS Styling

The application applies CSS3 styles to enhance the design and layout. The `App` component has a container layout with centered elements and appropriate spacing. The input box, information section, and heading are styled for a clean and visually appealing interface.

## Setup and Development

To set up and run the touch typing application locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open the application in your browser at `http://localhost:3000`.


