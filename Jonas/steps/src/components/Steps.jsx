/* eslint-disable react/prop-types */
function Steps({ index, total }) {
   function produceItems() {
      return Array.from({ length: total }, (_, i) => i);
   }

   return (
      <div className='container'>
         {produceItems().map((item) => (
            <div
               key={item}
               className='step'
               style={{
                  backgroundColor: index >= item ? 'violet' : 'gray',
               }}
            >
               {item + 1}
            </div>
         ))}
      </div>
   );
}

export default Steps;
