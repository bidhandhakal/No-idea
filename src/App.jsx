import "./index.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <nav className="flex justify-between items-center p-15 px-8 md:px-16 lg:px-24 bg-[#F0F1FA]">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div
              className="text-4xl tracking-wide font-medium text-black "
              aria-label="NOIDEA"
            >
              NOIDEA
            </div>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-[#2B2E3A] text-white text-[1.2rem] font-semibold hover:bg-[#3A47F4] cursor-pointer w-35 h-13 rounded-full transition-all duration-400 p-2 mr-4">
            HIRE ME &nbsp;<span class="header-right-menu-btn-dot"></span>
          </Button>
          <Button className="menu-button bg-[#F0F1] text-black text-[1.2rem] font-semibold hover:bg-[#ffffff] cursor-pointer w-35 h-13 rounded-full transition-all duration-400 p-2">
            MENU
            <div className="dots-container">
              <span className="header-right-menu-btn-dot"></span>
              <span className="header-right-menu-btn-dot"></span>
            </div>
          </Button>
        </div>
      </nav>
    </>
  );
}

export default App;
