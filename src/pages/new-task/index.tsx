/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { addTask } from '../../state/reducers/task.reducer';
import { TaskType } from '../../state/types';

const NewTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const add = () => {
    if (!title.trim() || !date.trim()) {
      alert('Title and due date are required');
      return;
    }
    const task: TaskType = {
      id: new Date().toISOString(),
      content,
      createdAt: new Date().toISOString(),
      dueAt: date,
      title,
    };
    dispatch(addTask(task));
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <h2>Create Task</h2>
        </div>
        <div>
          <div className="flex flex-col mb-3">
            <label>Title</label>
            <input
              type="text"
              className="border-2 outline-none py-2 px-4 border-black rounded"
              placeholder="Title"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Due Date</label>
            <input
              type="datetime-local"
              className="border-2 outline-none py-2 px-4 border-black rounded"
              placeholder="Date"
              onChange={(e) => setDate(new Date(e.currentTarget.value).toISOString())}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Note</label>
            <textarea
              className="border-2 outline-none py-2 px-4 border-black rounded h-[40]"
              placeholder="Note"
              onChange={(e) => setContent(e.currentTarget.value)}
            />
          </div>
          <div>
            <Button onClick={() => add()} variant="secondary">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
