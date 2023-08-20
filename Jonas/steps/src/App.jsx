/* eslint-disable react/prop-types */
import { useState } from 'react';
import Steps from './components/Steps';
import './App.css';

const items = [
   { id: '1', title: 'Learn React' },
   { id: '2', title: 'Build simple component' },
   { id: '3', title: 'Land a Job' },
];

function App() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const currentData = items[currentIndex];

   function handleNext() {
      if (currentIndex < items.length - 1)
         setCurrentIndex((index) => index + 1);
   }

   function handlePrev() {
      if (currentIndex > 0) setCurrentIndex((index) => index - 1);
      console.log('STEPS', Steps);
   }

   return (
      <div className='steps-container'>
         <div className='steps'>
            {/* Steps */}
            <Steps index={currentIndex} />
            {/* Title */}
            <h3>{currentData.title}</h3>
            <div className='buttons-container'>
               <button onClick={handlePrev}>Prev</button>
               <button onClick={handleNext}>Next</button>
            </div>
            {/* Buttons */}
         </div>
      </div>
   );
}

export default App;
