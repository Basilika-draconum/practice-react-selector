import { createSelector } from '@reduxjs/toolkit';
export const selectToDos = state => state.toDos;
// export const selectDoneToDos = state => {
//   const commonToDos = selectToDos(state);
//   return commonToDos.filter(item => item.isDone);
// };
export const selectIsDoneToDos = createSelector([selectToDos], commonToDos => {
  return commonToDos.filter(item => item.isDone);
});
