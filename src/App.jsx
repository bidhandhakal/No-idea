import "./index.css";
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <nav className="flex justify-between items-center p-15 px-8 md:px-16 lg:px-24 bg-[#F0F1FA]">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-widest text-black">NOIDEA</h1>
          </a>
        </div>
        <div>
          <Button className="bg-[#2B2E3A] text-white text-base font-sans font-bold hover:bg-[#3A47F4] cursor-pointer w-30 h-13 rounded-full transition-all duration-400 p-2 mr-4">
            HIRE ME
          </Button>
          <Button className="bg-[#F0F1FA] text-black text-base font-sans font-bold hover:bg-[#ffffff] cursor-pointer w-30 h-13 rounded-full transition-all duration-400 p-2">
            MENU
          </Button>
        </div>
      </nav>
    </>
  );
}

export default App;