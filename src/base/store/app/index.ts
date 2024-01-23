import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Articles} from '../../../domain/services/features/newsapi';

type AppState = {
  error: ErrorNotif;
  currentNews: Articles;
};

type ErrorNotif = {
  isError: boolean;
  message: string;
};

const initialState: AppState = {
  error: {
    isError: false,
    message: '',
  },
  currentNews: {},
};

const appReducerName = 'app';
const appSlice = createSlice({
  name: appReducerName,
  initialState,
  reducers: {
    setErrorNotif(state: AppState, action: PayloadAction<ErrorNotif>) {
      state.error = action.payload;
    },
    setCurrentNews(state: AppState, action: PayloadAction<Articles>) {
      state.currentNews = action.payload;
    },
  },
});

export const appReducer = {[appReducerName]: appSlice.reducer};
export const {setErrorNotif, setCurrentNews} = appSlice.actions;
