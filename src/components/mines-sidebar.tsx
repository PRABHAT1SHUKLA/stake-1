import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface SidebarProps {
  betAmount: number
  onBetAmountChange: (amount: number) => void
  numberOfMines: number
  onNumberOfMinesChange: (mines: number) => void
  onPlay: () => void
}

export function Sidebar({
  betAmount,
  onBetAmountChange,
  numberOfMines,
  onNumberOfMinesChange,
  onPlay
}: SidebarProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-blue-900 rounded-lg shadow-lg">
      <div>
        <Label htmlFor="betAmount">Bet Amount</Label>
        <div className="flex items-center gap-2">
          <Input
            id="betAmount"
            type="number"
            value={betAmount}
            onChange={(e) => onBetAmountChange(Number(e.target.value))}
            className="bg-blue-800 text-white"
          />
          <Button
            onClick={() => onBetAmountChange(betAmount / 2)}
            variant="outline"
            size="sm"
          >
            ½
          </Button>
          <Button
            onClick={() => onBetAmountChange(betAmount * 2)}
            variant="outline"
            size="sm"
          >
            2×
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="numberOfMines">Number of Mines</Label>
        <Slider
          id="numberOfMines"
          min={1}
          max={24}
          step={1}
          value={[numberOfMines]}
          onValueChange={(value) => onNumberOfMinesChange(value[0])}
          className="my-2"
        />
        <div className="text-center">{numberOfMines}</div>
      </div>
      <Button onClick={onPlay} className="w-full bg-green-500 hover:bg-green-600">
        Play
      </Button>
    </div>
  )
}


