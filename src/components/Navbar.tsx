import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="h-20 shadow-lg bg-secondary flex items-center pl-10 justify-between">
        <div>
          <button onClick={() => navigate('/')} className="text-2xl text-primary font-medium">
            Task Scheduler
          </button>
        </div>
        <div className="h-full bg-white bg-opacity-10 flex w-80 justify-around text-xs lowercase">
          <button className="text-primary">active tasks</button>
          <button className="text-primary">all tasks</button>
          <button className="text-primary" onClick={() => navigate('/new-task')}>
            create task
          </button>
          <button className="text-primary">quit</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
