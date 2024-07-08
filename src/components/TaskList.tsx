import React, { useReducer, useCallback, useMemo } from 'react';
import { initialState, Reducer2 } from './Reducer2';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const [state, dispatch] = useReducer(Reducer2, initialState);

  const addTask = useCallback((text: string) => {
    dispatch({ type: 'ADD_TASK', payload: text });
  }, []);

  const removeTask = useCallback((id: number) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  }, []);

  const toggleTask = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }, []);

  const completedCount = useMemo(() => state.tasks.filter(task => task.completed).length, [state.tasks]);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <TaskForm addTask={addTask} />
      <ul className="mt-4 space-y-2">
        {state.tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm">
            <span
              className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleTask(task.id)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700"
              >
                Terminar
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right text-sm text-gray-600">
        Tareas terminadas: {completedCount}
      </div>
    </div>
  );
};

export default TaskList;
