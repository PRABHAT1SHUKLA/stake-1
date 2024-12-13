"use client"

import * as React from "react"
import { Bitcoin, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BettingSidebar() {
  const [betAmount, setBetAmount] = React.useState("0.00000000")
  const [mines, setMines] = React.useState("3")

  const handleHalfBet = () => {
    const currentBet = parseFloat(betAmount)
    setBetAmount((currentBet / 2).toFixed(8))
  }

  const handleDoubleBet = () => {
    const currentBet = parseFloat(betAmount)
    setBetAmount((currentBet * 2).toFixed(8))
  }

  return (
    <div className="w-[320px] rounded-lg bg-[#1E1E2F] p-4">
      <Tabs defaultValue="manual" className="mb-6">
        <TabsList className="grid w-full grid-cols-2 bg-[#2A2A3C]">
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="auto">Auto</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="betAmount" className="text-sm text-white/70">
              Bet Amount
            </Label>
            <span className="text-xs text-white/50">$0.00</span>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                id="betAmount"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="bg-[#2A2A3C] pr-8 font-mono"
              />
              <Bitcoin className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-500" />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#2A2A3C] px-2 hover:bg-[#3A3A4C]"
              onClick={handleHalfBet}
            >
              ½
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#2A2A3C] px-2 hover:bg-[#3A3A4C]"
              onClick={handleDoubleBet}
            >
              2×
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mines" className="text-sm text-white/70">
            Mines
          </Label>
          <Select defaultValue={mines} onValueChange={setMines}>
            <SelectTrigger
              id="mines"
              className="w-full bg-[#2A2A3C]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[...Array(24)].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-green-500 font-semibold text-white hover:bg-green-400">
          Bet
        </Button>
      </div>
    </div>
  )
}

