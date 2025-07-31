import "./index.css";
function App() {
  return (<>
    <nav className="flex justify-between items-center p-6 px-8 md:px-16 lg:px-24 bg-black">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" className="w-12 h-12" />
        <h1 className="text-2xl font-bold text-white">NOIDEA</h1>
      </div>
      <div className="flex items-center gap-2">
        <a href="/about" className="text-2xl text-white font-semibold ml-10 hover:text-gray-400 transition-all duration-300">About</a>
        <a href="/projects" className="text-2xl text-white font-semibold ml-10 hover:text-gray-400 transition-all duration-300">Projects</a>
        <a href="/contact" className="text-2xl text-white font-semibold ml-10 hover:text-gray-400 transition-all duration-300">Contact</a>
      </div>
    </nav>
    <div className=" w-full min-h-screen bg-black text-white">
    </div>
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-400">

    </div>
  </>
  );
}

export default App;