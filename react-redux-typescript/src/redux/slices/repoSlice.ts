import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface RepoState {
   data: string[];
   loading: boolean;
   error: string | null;
}

const initialState: RepoState = {
   data: [],
   loading: false,
   error: null,
};

export const repoSlice = createSlice({
   name: 'repo',
   initialState,
   reducers: {
      setRepo: (state, action: PayloadAction<string[]>) => {
         state.data = action.payload;
         state.loading = false;
         state.error = null;
      },
      setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
         state.data = [];
         state.error = null;
      },
      setError: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.data = [];
         state.error = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { setLoading, setRepo, setError } = repoSlice.actions;

export default repoSlice.reducer;
