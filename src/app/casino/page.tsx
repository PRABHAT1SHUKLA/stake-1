"use client"

import { Search } from 'lucide-react'
import { GameCard } from "@/components/game-card"
import { ScrollContainer } from "@/components/scroll-container"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stakeOriginals = [
  { title: "Dice", playersCount: 4044, image: "/games/dice.png" },
  { title: "Crash", playersCount: 2067, image: "/games/crash.png" },
  { title: "Plinko", playersCount: 2344, image: "/games/plinko.png" },
  { title: "Mines", playersCount: 5426, image: "/games/mines.png" },
  { title: "Limbo", playersCount: 3717, image: "/games/limbo.png" },
  { title: "Keno", playersCount: 1602, image: "/games/keno.png" },
  { title: "Hilo", playersCount: 1116, image: "/games/hilo.png" },
]

const slots = [
  { title: "Sweet Bonanza", image: "/games/sweet-bonanza.png" },
  { title: "Gates of Olympus", image: "/games/gates-olympus.png" },
  { title: "Sugar Rush", image: "/games/sugar-rush.png" },
  { title: "Fruit Party", image: "/games/fruit-party.png" },
  { title: "Big Bass Splash", image: "/games/big-bass.png" },
]

export default function GamingPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search your game"
          className="h-10 pl-9 md:h-12"
        />
      </div>

      <Tabs defaultValue="lobby" className="w-full">
        <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger
            value="lobby"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Lobby
          </TabsTrigger>
          <TabsTrigger
            value="originals"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Stake Originals
          </TabsTrigger>
          <TabsTrigger
            value="slots"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Slots
          </TabsTrigger>
          <TabsTrigger
            value="live"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Live Casino
          </TabsTrigger>
          <TabsTrigger
            value="shows"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Game Shows
          </TabsTrigger>
          <TabsTrigger
            value="exclusives"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            Stake Exclusives
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="rounded-full bg-muted/50 data-[state=active]:bg-primary"
          >
            New Releases
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lobby" className="mt-8 space-y-8">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Stake Originals</h2>
            </div>
            <ScrollContainer>
              {stakeOriginals.map((game) => (
                <GameCard
                  key={game.title}
                  className="min-w-[200px] md:min-w-[240px]"
                  {...game}
                />
              ))}
            </ScrollContainer>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Slots</h2>
            </div>
            <ScrollContainer>
              {slots.map((game) => (
                <GameCard
                  key={game.title}
                  variant="slot"
                  className="min-w-[200px] md:min-w-[240px]"
                  {...game}
                />
              ))}
            </ScrollContainer>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}

