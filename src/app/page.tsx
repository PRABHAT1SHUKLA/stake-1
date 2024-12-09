"use client"

import Image from "next/image";

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useRouter } from "next/navigation";


export default function LandingPage() {
  
  const router = useRouter(); // Use the `useRouter` hook from `next/navigation`

  const handleClick = () => {
    router.push("/casino"); // Navigate to the /casino page
  };

  return (
    <div className="min-h-screen bg-blue-950 pt-20">
      {/* Header */}
      {/* <header className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-white">Stake</div>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-white">
              Sign In
            </Button>
            <Button>Join Now</Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative pt-5">
        <div className="container px-4 py-2 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter  sm:text-5xl xl:text-6xl/none bg-gradient-to-r text-transparent from-pink-500 via-orange-400  to-yellow-500 bg-clip-text"> The thrill is here</h1>
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Your Unrivalled Online Casino & Sportsbook
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Experience the thrill of gaming and sports betting on our secure platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800 bg-lime-600">
                  Learn More
                </Button>
              </div>
              <div className=" relative py-10">
                <Button
                  size="lg"
                  onClick={handleClick}
                  variant="default" // or any custom variant
                  className="relative bg-cover bg-center text-white font-bold bg-gray-800 grayscale hover:filter-none transition-all duration-300"
                  style={{
                    backgroundImage: `url('https://mediumrare.imgix.net/casino-poker-cards-green-en.jpg?auto=format&w=78')`,

                    
                  }}
                >
                  CASINO
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={600}
                height={600}
                alt="Casino games preview"
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-700"
              >
                <div className="space-y-2">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                  <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
                <ChevronRight className="absolute bottom-6 right-6 h-5 w-5 text-zinc-600 transition-all group-hover:text-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 py-20">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white">Play Anywhere, Anytime</h2>
                <p className="text-zinc-400">
                  Download our mobile app and take the excitement with you. Available for iOS and Android devices.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800 bg-lime-600 hover:text-white">
                  Download for iOS
                </Button>
                <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800 hover:text-white bg-blue-900">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="https://mediumrare.imgix.net/unauth-header-casino-en.png?w=333&h=500&fit=min&auto=format"
                width={600}
                height={600}
                alt="Mobile app preview"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="container px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-zinc-400">© 2024 Stake. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    name: "Casino Games",
    description: "Access hundreds of slots, table games, and live dealer experiences.",
    icon: function CasinoIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    },
  },
  {
    name: "Sports Betting",
    description: "Bet on your favorite sports with competitive odds and live streaming.",
    icon: function SportsIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
  },
  {
    name: "Secure Payments",
    description: "Fast deposits and withdrawals with multiple payment methods.",
    icon: function PaymentIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      )
    },
  },
]


