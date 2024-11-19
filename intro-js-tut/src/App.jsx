import { useEffect, useState } from 'react';
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import './App.css';

function App() {
   const [showBottom, setShowBottom] = useState(false);
   const intro = introJs();

   const steps = [
      { element: '#top', intro: 'This is a top box', position: 'top' },
   ];

   const productTour = () => {
      intro.setOptions({ steps });
      intro.start();
   };

   const bottomTour = (showBottom) => {
      if (showBottom) {
         const bottomIntro = introJs();
         const steps = [
            {
               element: '#bottom',
               intro: 'This is a bottom box',
               position: 'top',
            },
            { element: '#last', intro: 'This is a last box', position: 'top' },
         ];
         bottomIntro.setOptions({ steps });
         bottomIntro.start();
      }
   };

   useEffect(() => {
      productTour();
   }, []);

   useEffect(() => {
      bottomTour(showBottom);
   }, [showBottom]);

   return (
      <div className='container'>
         <button onClick={() => setShowBottom(true)}>Show Bottom</button>
         <div id='top'>
            <h3>Name</h3>
            <h4>Description</h4>
         </div>
         <br />
         {showBottom && (
            <>
               <div id='bottom'>
                  <h3>Job</h3>
                  <h4>Salary</h4>
               </div>
               <br />

               <div id='last'>
                  <h3>Wife</h3>
                  <h4>Location</h4>
               </div>
            </>
         )}
      </div>
   );
}

export default App;
