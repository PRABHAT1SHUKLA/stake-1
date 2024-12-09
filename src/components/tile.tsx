import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

interface TileProps {
  onClick: () => void
  revealed: boolean
  isMine: boolean
  isGem: boolean
}

export function Tile({ onClick, revealed, isMine, isGem }: TileProps) {
  return (
    <motion.button
      className={cn(
        "w-full h-full aspect-square rounded-md shadow-md transition-colors",
        revealed
          ? isMine
            ? "bg-red-500"
            : isGem
            ? "bg-green-500"
            : "bg-blue-700"
          : "bg-blue-600 hover:bg-blue-500"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {revealed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isMine ? "💣" : isGem ? "💎" : ""}
        </motion.div>
      )}
    </motion.button>
  )
}

