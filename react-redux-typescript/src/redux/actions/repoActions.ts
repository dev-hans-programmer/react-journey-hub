import axios from 'axios';
import { setLoading, setRepo, setError } from '../slices/repoSlice';
import { AppDispatch } from '..';

const API_URL = 'https://registry.npmjs.org/-/v1/search';

type RepoResponse = {
   objects: { package: { name: string } }[];
};

export const searchRepo = (term: string) => async (dispatch: AppDispatch) => {
   try {
      dispatch(setLoading(true));
      const { data }: { data: RepoResponse } = await axios.get(API_URL, {
         params: {
            text: term,
         },
      });
      const repos = data.objects.map((obj) => obj.package.name);
      dispatch(setRepo(repos));
   } catch (err) {
      if (err instanceof Error) {
         console.error(err);
         dispatch(setError(err.message));
      } else {
         console.error(err);
         dispatch(setError('An unknown error occurred.'));
      }
   }
};
