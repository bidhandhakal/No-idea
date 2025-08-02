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
          <Button
            className="bg-[#2B2E3A] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] 
            text-white text-[1.2rem] font-semibold hover:bg-[#3A47F4] active:bg-[#3A47F4] 
            cursor-pointer w-35 h-13 rounded-full transition-all duration-400 p-2 mr-1
            touch-action-manipulation"
          >
            HIRE ME &nbsp;<span className="header-right-menu-btn-dot"></span>
          </Button>
          <Button
            className="menu-button shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] 
            bg-[#F0F1] text-black text-[1.2rem] font-semibold hover:bg-[#ffffff] 
            active:bg-[#ffffff] cursor-pointer w-35 h-13 rounded-full 
            transition-all duration-400 p-2 touch-action-manipulation"
          >
            MENU
            <div className="dots-container">
              <span className="header-right-menu-btn-dot"></span>
              <span className="header-right-menu-btn-dot"></span>
            </div>
          </Button>
        </div>
      </nav>
      <div className="flex flex-col items-start justify-center h-screen pl-24">
        <p className="text-[7rem] uppercase">hello! I am SKY</p>
      </div>
      <div className="flex flex-col items-start justify-center h-screen pl-24">
        <h1 className="text-5xl">I AM FULLSTACK DEVELOPER</h1>
      </div>
      <div className="flex flex-col items-start h-screen pl-18 relative">
        <span className="text-[19rem] tracking-tight">PROJECTS</span>
        <span className="absolute top-26 right-24 text-8xl font-normal">5</span>
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          className="absolute bottom-167 right-16 transform rotate-45"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="w-2/5 ml-23  rounded-4xl overflow-hidden">
        <img src="image.png" alt="Luxera" />
      </div>
    </>
  );
}

export default App;
