"use client"

import { useState } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function GameFooter() {
  const [multiplier, setMultiplier] = useState(2)
  const [rollOver, setRollOver] = useState(50)
  const [winChance, setWinChance] = useState(49.5)

  const adjustValue = (setter: React.Dispatch<React.SetStateAction<number>>, value: number, increment: number) => {
    setter(Math.max(0, value + increment))
  }

  return (
    <div className="flex flex-wrap justify-between gap-4 p-4 bg-zinc-900 rounded-lg">
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={multiplier.toFixed(2)}
          onChange={(e) => setMultiplier(parseFloat(e.target.value))}
          className="w-24 bg-zinc-800 border-zinc-700 text-white text-center"
        />
        <span className="text-zinc-400">x</span>
        <div className="flex flex-col">
          <Button
            variant="ghost"
            size="sm"
            className="px-2 py-0 text-zinc-400 hover:text-white"
            onClick={() => adjustValue(setMultiplier, multiplier, 0.01)}
          >
            <ArrowUp size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 py-0 text-zinc-400 hover:text-white"
            onClick={() => adjustValue(setMultiplier, multiplier, -0.01)}
          >
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={rollOver.toFixed(2)}
          onChange={(e) => setRollOver(parseFloat(e.target.value))}
          className="w-24 bg-zinc-800 border-zinc-700 text-white text-center"
        />
        <div className="flex flex-col">
          <Button
            variant="ghost"
            size="sm"
            className="px-2 py-0 text-zinc-400 hover:text-white"
            onClick={() => adjustValue(setRollOver, rollOver, 0.01)}
          >
            <ArrowUp size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 py-0 text-zinc-400 hover:text-white"
            onClick={() => adjustValue(setRollOver, rollOver, -0.01)}
          >
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={winChance.toFixed(2)}
          onChange={(e) => setWinChance(parseFloat(e.target.value))}
          className="w-24 bg-zinc-800 border-zinc-700 text-white text-center"
        />
        <span className="text-zinc-400">%</span>
      </div>
    </div>
  )
}

