import { GameSidebar } from "@/components/game-sidebar";
import { GameSlider } from "@/components/game-slider";
import { GameFooter } from "@/components/game-footer";
import GameControl from "@/components/game-control";

export default function DiceGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white flex justify-center items-center p-4">
      <div className="w-full max-w-8xl bg-zinc-800 rounded-lg shadow-lg p-16 space-y-8">
        {/* <h1 className="text-3xl font-bold text-center bg-gradient-to-r text-transparent from-pink-500 via-orange-400 to-yellow-500 bg-clip-text">
          Dice Game
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 h-full">
          {/* Sidebar with unique background */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-md h-full ">
            <GameSidebar />
          </div>
          {/* Main content area */}
          <div className="flex flex-col space-y-12">
            {/* Slider container */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <GameControl/>
            </div>
            {/* Footer at the bottom */}
            {/* <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
              <GameFooter />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}


