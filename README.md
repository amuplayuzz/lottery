# lottery

README for Lottery Component
Description
The Lottery component is a simple lottery game built with React, featuring the NextUI Button component for interaction. The game randomly selects an item from a predefined list of lottery options every 50 milliseconds. If the selected item is a bomb ('💥'), the user loses; otherwise, the user wins.

Features
Randomly selects a lottery option from a list.
Displays a message indicating whether the user has won or lost.
Uses a button to pause the game (feature to be implemented).
Highlights the selected lottery option in red.
Installation
Clone the repository.
Install the required dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
Usage
Import the Lottery component into your React application.
jsx
Copy code
import Lottery from './path/to/Lottery';
Include the Lottery component in your JSX.
jsx
Copy code
function App() {
return (

<div>
<Lottery />
</div>
);
}
Code Explanation
jsx
Copy code
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const Lottery = () => {
const lotteryOptions = ['💥', '🍒', '💥', '🍋', '💥', '💥', '🍌', '💥', '💥'];

    const [randomNum, setRandomNum] = useState(null);
    const [isPaused, setIsPaused] = useState(false);  // New state for pause functionality

    useEffect(() => {
        if (!isPaused) {  // Check if the game is not paused
            const timer = setTimeout(() => {
                const tempNum = Math.floor(Math.random() * lotteryOptions.length);
                setRandomNum(tempNum === randomNum ? (randomNum + 1) % lotteryOptions.length : tempNum);
            }, 50);

            return () => clearTimeout(timer);  // Cleanup the timer on component unmount or when isPaused changes
        }
    }, [randomNum, isPaused]);

    return (
        <div>
            {lotteryOptions[randomNum] === '💥' ? 'You lost' : 'Congrats you won ' + lotteryOptions[randomNum]}
            <div className='bg-black w-10 m-10'>
                {lotteryOptions.map((item, id) => (
                    <div
                        key={id}
                        style={{ backgroundColor: id === randomNum ? 'red' : null }}
                        className='text-4xl text-white rounded-sm my-4'
                    >
                        {item}
                    </div>
                ))}
            </div>
            <Button onClick={() => setIsPaused(!isPaused)}>{isPaused ? 'Resume' : 'Pause'}</Button>  {/* Toggle pause/resume */}
        </div>
    );

};

export default Lottery;
Props
The Lottery component does not accept any props.

State
randomNum: Stores the current randomly selected index.
isPaused: Stores the pause state of the game (default is false).
Dependencies
@nextui-org/react: Used for the Button component.
react: React library for building user interfaces.
Future Improvements
Implement the pause functionality.
Add a reset button to restart the game.
Enhance the UI with more styling and animations.
License
This project is licensed under the MIT License.
