import { useSelector } from 'react-redux';
import { selectIsDoneToDos } from 'redux/todo-selector';

export const App = () => {
  const toDosDone = useSelector(selectIsDoneToDos);
  console.log(toDosDone);
  return <div>React homework template</div>;
};
