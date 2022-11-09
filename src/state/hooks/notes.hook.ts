import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../reducers/task.reducer';

export const useTasks = () => {
  const tasks = useSelector(selectTasks);
  const activeTasks = useMemo(
    () => tasks.filter((t) => new Date(t.dueAt).getTime() > new Date().getTime()),
    [tasks]
  );

  return useMemo(() => ({ tasks, activeTasks }), [tasks, activeTasks]);
};
