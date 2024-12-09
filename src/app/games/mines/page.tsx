"use client"

import { useState, useEffect } from 'react'
import { GameBoard } from "@/components/game-board"
import { Sidebar } from "@/components/sidebar"
import { VolatilitySwitch } from "@/components/volatility-switch"

export default function MinesGame() {
  const [betAmount, setBetAmount] = useState(1)
  const [numberOfMines, setNumberOfMines] = useState(3)
  const [isHighVolatility, setIsHighVolatility] = useState(false)
  const [board, setBoard] = useState<boolean[][]>(Array(5).fill(Array(5).fill(false)))
  const [revealedTiles, setRevealedTiles] = useState<boolean[][]>(Array(5).fill(Array(5).fill(false)))
  const [payoutMultiplier, setPayoutMultiplier] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)

  const generateBoard = () => {
    const newBoard = Array(5).fill(null).map(() => Array(5).fill(false))
    let minesPlaced = 0
    while (minesPlaced < numberOfMines) {
      const row = Math.floor(Math.random() * 5)
      const col = Math.floor(Math.random() * 5)
      if (!newBoard[row][col]) {
        newBoard[row][col] = true
        minesPlaced++
      }
    }
    setBoard(newBoard)
    setRevealedTiles(Array(5).fill(Array(5).fill(false)))
    setPayoutMultiplier(1)
    setIsGameOver(false)
  }

  const handleTileClick = (row: number, col: number) => {
    if (isGameOver || revealedTiles[row][col]) return

    const newRevealedTiles = revealedTiles.map(r => [...r])
    newRevealedTiles[row][col] = true
    setRevealedTiles(newRevealedTiles)

    if (board[row][col]) {
      setIsGameOver(true)
    } else {
      const newMultiplier = payoutMultiplier * (isHighVolatility ? 1.2 : 1.1)
      setPayoutMultiplier(Number(newMultiplier.toFixed(2)))
    }
  }

  useEffect(() => {
    generateBoard()
  }, [numberOfMines, isHighVolatility])

  return (
    <div className="min-h-screen bg-blue-950 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Mines Game</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div>
          <GameBoard
            board={board}
            revealedTiles={revealedTiles}
            onTileClick={handleTileClick}
          />
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold">Payout Multiplier: {payoutMultiplier}x</p>
            {isGameOver && <p className="text-red-500 text-xl mt-2">Game Over!</p>}
          </div>
        </div>
        <div className="space-y-4">
          <Sidebar
            betAmount={betAmount}
            onBetAmountChange={setBetAmount}
            numberOfMines={numberOfMines}
            onNumberOfMinesChange={setNumberOfMines}
            onPlay={generateBoard}
          />
          <VolatilitySwitch
            isHighVolatility={isHighVolatility}
            onToggle={() => setIsHighVolatility(!isHighVolatility)}
          />
        </div>
      </div>
    </div>
  )
}

