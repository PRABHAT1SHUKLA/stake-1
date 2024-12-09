import { Tile } from "./tile"

interface GameBoardProps {
  board: boolean[][]
  revealedTiles: boolean[][]
  onTileClick: (row: number, col: number) => void
}

export function GameBoard({ board, revealedTiles, onTileClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-2 p-4 bg-blue-900 rounded-lg shadow-lg">
      {board.map((row, rowIndex) =>
        row.map((isMine, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            onClick={() => onTileClick(rowIndex, colIndex)}
            revealed={revealedTiles[rowIndex][colIndex]}
            isMine={isMine}
            isGem={!isMine && revealedTiles[rowIndex][colIndex]}
          />
        ))
      )}
    </div>
  )
}

