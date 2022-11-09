import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import { useTasks } from '../../state/hooks/notes.hook';
import { deleteTask } from '../../state/reducers/task.reducer';

const Homepage = () => {
  const { tasks } = useTasks();
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center flex-col py-10">
        <div className="w-[500px]">
          {tasks.map((t) => (
            <div
              key={t.id}
              className="flex items-center h-[80px] rounded text-xs bg-[#111111] mb-2 transition-all duration-300 hover:shadow-md text-white px-10 flex-row justify-between"
            >
              <div className="font-medium">{t.title}</div>
              <div className="flex items-center">
                <div>
                  Due at: {new Date(t.dueAt).toDateString()}{' '}
                  {`${new Date(t.dueAt).getHours()}:${
                    new Date(t.dueAt).getMinutes() < 10
                      ? new Date(t.dueAt).getMinutes() + '0'
                      : new Date(t.dueAt).getMinutes()
                  }`}
                </div>
                <button
                  className="bg-red-600 text-white px-3 py-2 rounded ml-7"
                  onClick={() => dispatch(deleteTask(t.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
