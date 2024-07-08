import Chat from "../components/Chats";
const ChatPage = () => {
  return (
    <div className="min-h-screen bg-white-200 flex flex-col items-center justify-right p-12">
      <div className='bg-purple-200 p-4 rondend-xl shadow-xl border'>
      <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
