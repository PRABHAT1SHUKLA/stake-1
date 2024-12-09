"use client"

import { useState } from 'react'
import { Bitcoin, ArrowUp, ArrowDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function GameSidebar() {
  const [betAmount, setBetAmount] = useState(0.00000000)
  const [profitOnWin, setProfitOnWin] = useState(0.00000000)

  const handleBetAmountChange = (value: number) => {
    setBetAmount(value)
    // Update profit on win based on some calculation
    setProfitOnWin(value * 2) // This is just an example calculation
  }

  return (
    <div className="flex flex-col gap-4 p-4 h-full bg-zinc-900 rounded-lg">
      <div className="space-y-4">
        <label htmlFor="betAmount" className="text-sm font-medium text-zinc-400">Bet Amount</label>
        <div className="relative">
          <Input
            id="betAmount"
            type="number"
            value={betAmount}
            onChange={(e) => handleBetAmountChange(parseFloat(e.target.value))}
            className="pl-8 pr-4 py-2 bg-zinc-800 border-zinc-700 text-white"
            placeholder="Enter amount"
          />
          <Bitcoin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400" size={16} />
        </div>
      </div>
      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                onClick={() => handleBetAmountChange(betAmount / 2)}
              >
                ½
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Halve bet amount</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                onClick={() => handleBetAmountChange(betAmount * 2)}
              >
                2×
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Double bet amount</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="space-y-2">
        <label htmlFor="profitOnWin" className="text-sm font-medium text-zinc-400">Profit on Win</label>
        <div className="relative">
          <Input
            id="profitOnWin"
            type="number"
            value={profitOnWin}
            readOnly
            className="pl-8 pr-4 py-2 bg-zinc-800 border-zinc-700 text-white"
          />
          <Bitcoin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400" size={16} />
        </div>
      </div>
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Bet
      </Button>
    </div>
  )
}

