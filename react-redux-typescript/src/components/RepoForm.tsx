import { ChangeEvent, FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';

export function RepoForm() {
   const { searchRepo } = useActions();

   const [term, setTerm] = useState<string>('');

   function handleTerm(event: ChangeEvent<HTMLInputElement>) {
      setTerm(event.target.value);
   }

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      await searchRepo(term);
      setTerm('');
   }

   return (
      <div className='repo-form'>
         <form onSubmit={handleSubmit}>
            <input
               value={term}
               onChange={handleTerm}
               placeholder='Search for repos...'
            />
            <button>Search</button>
         </form>
      </div>
   );
}
