import { GameSidebar } from "@/components/game-sidebar"
import { GameSlider } from "@/components/game-slider"
import { GameFooter } from "@/components/game-footer"

export default function DiceGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Dice Game</h1>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <GameSidebar />
          <div className="space-y-8">
            <GameSlider defaultValue={[50]} max={100} step={1} />
            <GameFooter />
          </div>
        </div>
      </div>
    </div>
  )
}

