const { createSlice } = require('@reduxjs/toolkit');

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: [
    {
      isDone: true,
      title: 'Rick and',
      id: 1,
    },
    { isDone: true, title: 'Morty', id: 2 },
    { isDone: false, title: 'Adventures', id: 3 },
  ],
});
export const { reducer } = toDoSlice;
