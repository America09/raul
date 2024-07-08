// reducer.ts
import { State, Action, Task } from '../types/Types';

const initialState: State = {
  tasks: [],
};

const Reducer2 = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { tasks: [...state.tasks, newTask] };
    case 'REMOVE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export { initialState, Reducer2 };
