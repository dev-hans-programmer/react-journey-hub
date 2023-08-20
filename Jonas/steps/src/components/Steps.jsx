/* eslint-disable react/prop-types */
function Steps({ index }) {
   const arr = [0, 1, 2];
   return (
      <div className='container'>
         {arr.map((item) => (
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
