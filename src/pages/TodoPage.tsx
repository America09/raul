import TaskList from "../components/TaskList";

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className='bg-pink-300 p-8 rounded-xl shadow-xl border'>
      <TaskList />
      </div>
    </div>
  );
};

export default TodoPage;
