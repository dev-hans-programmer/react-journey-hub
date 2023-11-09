import { useAppSelector } from '../redux';

export function RepoList() {
   const { data, error, loading } = useAppSelector((state) => state.repo);

   return (
      <ul>
         {loading && <h3>Loading...</h3>}
         {error && <h3>Error: {error}</h3>}
         {data && data.map((item) => <li key={item}>{item}</li>)}
      </ul>
   );
}
