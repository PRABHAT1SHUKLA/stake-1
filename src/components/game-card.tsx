"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  playersCount?: number
  image: string
  link?:string
  variant?: "original" | "slot"
}

export function GameCard({ link ,title, playersCount, image, variant = "original", className, ...props }: GameCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
    <Card
    className={cn(
      "group relative aspect-[4/5] overflow-hidden border-0 bg-gradient-to-br transition-all hover:scale-105",
      variant === "original" ? "from-primary/50 to-primary" : "from-muted/50 to-muted",
      className
    )}
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="relative flex h-full flex-col justify-end p-4">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {playersCount && (
        <p className="text-sm text-white/70">
          {playersCount.toLocaleString()} playing
        </p>
      )}
    </div>
  </Card>
  </a>
  
  )
}

