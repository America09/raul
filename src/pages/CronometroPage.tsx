import Cronometro from "../components/Cronometro";
const CronometroPage = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className='bg-pink-300 p-8 rounded-xl shadow-xl border'>
      <Cronometro />
      </div>
    </div>
  );
};

export default CronometroPage;
