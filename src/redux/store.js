import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './todo-slice';

export const store = configureStore({
  reducer: { toDos: reducer },
});
