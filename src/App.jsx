import "./index.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-15 px-8 md:px-16 lg:px-24">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div
              className="text-4xl tracking-wide font-medium text-black "
              aria-label="NOIDEA"
            >
              SKY
            </div>
          </a>
        </div>
        <div className="flex items-center gap-4 ">
          <Button className="bg-[#2B2E3A] cursor-pointer shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] text-white text-[1.2rem] font-semibold hover:bg-[#3A47F4] active:bg-[#3A47F4] touch-action-manipulation w-35 h-13 rounded-full transition-all duration-400 p-2 mr-1">
            HIRE ME &nbsp;<span class="header-right-menu-btn-dot"></span>
          </Button>
          <Button className="menu-button cursor-pointer shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] bg-[#F0F1] text-black text-[1.2rem] font-semibold hover:bg-[#ffffff] active:bg-[#ffffff] touch-action-manipulation w-35 h-13 rounded-full transition-all duration-400 p-2">
            MENU
            <div className="dots-container">
              <span className="header-right-menu-btn-dot"></span>
              <span className="header-right-menu-btn-dot"></span>
            </div>
          </Button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className=" text-9xl uppercase ">hello! I am SKY.</p>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className=" text-5xl uppercase">I AM FUllStackwebdev</h1>
      </div>
    </>
  );
}

export default App;
