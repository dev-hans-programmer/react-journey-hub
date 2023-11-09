import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../redux/store';
import { repoActions } from '../redux';

export const useActions = () => {
   const dispatch = useAppDispatch();
   return bindActionCreators(repoActions, dispatch);
};
