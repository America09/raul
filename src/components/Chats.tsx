import { useEffect, useState } from "react";

type Message = {
  text: string;
  fromUser: boolean;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [nameAsked, setNameAsked] = useState(false);

  useEffect(() => {
    setMessages([{ text: 'Hola soy el chat. ¿Cuál es tu nombre?', fromUser: false }]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = (message: string) => {
    if (!nameAsked) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `¡Mucho gusto, ${message}!`, fromUser: false },
        { text: 'Opciones: 1. Mostrar catálogo', fromUser: false }
      ]);
      setNameAsked(true);
      setShowMenu(true);
    } else if (message.toLowerCase().includes('catalogo')) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Aquí está el catálogo:', fromUser: false },
        { text: 'Visita el catálogo', fromUser: false }
      ]);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'No entiendo esa opción. Por favor, intenta otra vez.', fromUser: false }
      ]);
    }
  };

  return (
    <>
      <div className="text-white text-xl font-semibold p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.fromUser ? ' p-2' : ' p-2'}`}>
            {msg.text.includes('Visita el catálogo') ? (
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {msg.text}
              </a>
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col p-2 my-2 space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="rounded text-lg p-1"
        />
        <button onClick={handleSend} className="rounded text-white p-2 bg-pink-700">
          Enviar
        </button>
      </div>
      {showMenu && (
        <div className="menu">
          <button onClick={() => handleBotResponse('catalogo')} className="p-2 rounded shadow-xl bg-pink-600 hover:bg-pink-700 text-white m-2">
            Mostrar catálogo
          </button>
        </div>
      )}
    </>
  );
}

export default Chat;
