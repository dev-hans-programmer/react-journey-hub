import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import * as esbuild from 'esbuild-wasm';
import './App.css';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

function App() {
   const [input, setInput] = useState('');
   const [result, setResult] = useState('');
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const ref = useRef<any>();

   async function startService() {
      const service = await esbuild.startService({
         worker: true,
         wasmURL: '/esbuild.wasm',
      });
      ref.current = service;
   }

   function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
      setInput(e.target.value);
   }

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!ref.current) return;
      console.log(ref.current);
      // const result = await ref.current.transform(input, {
      //    loader: 'jsx',
      //    target: 'es2015',
      // });

      const result = await ref.current.build({
         write: false,
         bundle: true,
         entryPoints: ['index.js'],
         plugins: [unpkgPathPlugin()],
      });
      console.log(result);
   }

   useEffect(() => {
      startService();
   }, []);

   return (
      <>
         <form onSubmit={handleSubmit}>
            <textarea value={input} onChange={handleInput}></textarea>
            <div>
               <button>Submit</button>
            </div>
            <pre>{JSON.stringify(result, null, 2)}</pre>
         </form>
      </>
   );
}

export default App;
