"use client"

import { Search } from 'lucide-react'
import { GameCard } from "@/components/game-card"
import { ScrollContainer } from "@/components/scroll-container"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stakeOriginals = [
  { title: "Dice", playersCount: 4044, image: "https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?&dpr=1&format=auto&auto=format&q=50&w=167" , link:"/games/dice" },
  { title: "Crash", playersCount: 2067, image: "https://mediumrare.imgix.net/c830595cbd07b2561ac76a365c2f01869dec9a8fe5e7be30634d78c51b2cc91e?&dpr=1&format=auto&auto=format&q=50&w=167"  , link:"/games/crash"},
  { title: "Plinko", playersCount: 2344, image: "https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf?&dpr=1&format=auto&auto=format&q=50&w=167" , link:"/games/plinko"},
  { title: "Mines", playersCount: 5426, image: "https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?&dpr=1&format=auto&auto=format&q=50&w=167" ,link:"/games/mines"},
  { title: "Limbo", playersCount: 3717, image: "https://mediumrare.imgix.net/11caec5df20098884ae9071848e1951b8b34e5ec84a7241f2e7c5afd4b323dfd?&dpr=1&format=auto&auto=format&q=50&w=167" ,link:"/games/mines"},
  { title: "Keno", playersCount: 1602, image: "https://mediumrare.imgix.net/102cf3d7c840018b939cd787bf013e080b996d80e604f3008f21dddf1f1aa201?&dpr=1&format=auto&auto=format&q=50&w=167" ,link:"/games/mines"},
  { title: "Hilo", playersCount: 1116, image: "https://mediumrare.imgix.net/7324297ac3a60dd5705db514330c5c363aca538432fda98be261bef8df232a77?&dpr=1&format=auto&auto=format&q=50&w=167" ,link:"/games/mines"},
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
    <div  className=" space-y-8 py-8 w-screen  bg-grey-600 text-grey-200">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search your game"
          className="h-10 pl-9 md:h-12"
        />
      </div>

      <Tabs defaultValue="lobby" className="w-full p-4 ">
        <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger
            value="lobby"
            className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Lobby
          </TabsTrigger>
          <TabsTrigger
            value="originals"
            className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Stake Originals
          </TabsTrigger>
          <TabsTrigger
            value="slots"
         className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Slots
          </TabsTrigger>
          <TabsTrigger
            value="live"
          className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Live Casino
          </TabsTrigger>
          <TabsTrigger
            value="shows"
             className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Game Shows
          </TabsTrigger>
          <TabsTrigger
            value="exclusives"
    className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
          >
            Stake Exclusives
          </TabsTrigger>
          <TabsTrigger
            value="new"
           className="rounded-full bg-muted/50 text-white transition-colors data-[state=active]:bg-green-800 data-[state=active]:text-white"
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

