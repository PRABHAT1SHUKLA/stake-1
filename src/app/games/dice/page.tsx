import { GameSidebar } from "@/components/game-sidebar";
// import { GameSlider } from "@/components/game-slider";
// import { GameFooter } from "@/components/game-footer";
import GameControl from "@/components/game-control";

export default function DiceGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white flex justify-center items-center p-4">
      <div className="w-full max-w-7xl bg-zinc-800 rounded-lg shadow-lg p-8 space-y-8">
        <div className="grid grid-cols-[300px_1fr] gap-8 h-full">
          {/* Sidebar */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md h-full">
            <GameSidebar />
          </div>

          {/* GameControl with slider and footer logic */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <GameControl />
          </div>
        </div>
      </div>
    </div>
  );
}