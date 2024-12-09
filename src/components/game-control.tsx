"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GameControl() {
  const [sliderValue, setSliderValue] = useState<number[]>([50]); // Slider value (winChance)
  const [multiplier, setMultiplier] = useState<number>(2);
  const maxSliderValue = 100; // Max value for the slider

  // Calculate derived values
  const winChance = sliderValue[0]; // Win chance directly from slider
  const rollover = sliderValue[0]; // Assuming rollover equals win chance
  const calculatedMultiplier = parseFloat((maxSliderValue / winChance).toFixed(2));

  // Update states when user interacts with inputs or slider
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setMultiplier(parseFloat((maxSliderValue / value[0]).toFixed(2)));
  };

  const handleMultiplierChange = (newMultiplier: number) => {
    const newWinChance = parseFloat((maxSliderValue / newMultiplier).toFixed(2));
    setMultiplier(newMultiplier);
    setSliderValue([newWinChance]);
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Slider */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
        <SliderPrimitive.Root
          value={sliderValue}
          max={maxSliderValue}
          step={1}
          className={cn(
            "relative flex w-full touch-none select-none items-center"
          )}
          onValueChange={handleSliderChange}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <SliderPrimitive.Range className="absolute h-full bg-transparent" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        <p className="text-center text-sm text-gray-400 mt-4">
          Win Area: {winChance.toFixed(2)}% | Multiplier: x{multiplier.toFixed(
            2
          )} | Rollover: {rollover.toFixed(2)}%
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between gap-4 p-4 bg-zinc-900 rounded-lg">
        {/* Multiplier */}
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={multiplier.toFixed(2)}
            onChange={(e) =>
              handleMultiplierChange(parseFloat(e.target.value) || 0)
            }
            className="w-24 bg-zinc-800 border-zinc-700 text-white text-center"
          />
          <span className="text-zinc-400">x</span>
          <div className="flex flex-col">
            <Button
              variant="ghost"
              size="sm"
              className="px-2 py-0 text-zinc-400 hover:text-white"
              onClick={() => handleMultiplierChange(multiplier + 0.01)}
            >
              <ArrowUp size={10} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2 py-0 text-zinc-400 hover:text-white"
              onClick={() => handleMultiplierChange(multiplier - 0.01)}
            >
              <ArrowDown size={10} />
            </Button>
          </div>
        </div>

        {/* Rollover */}
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={rollover.toFixed(2)}
            onChange={(e) =>
              setSliderValue([parseFloat(e.target.value) || 0])
            }
            className="w-24 bg-zinc-800 border-zinc-700 text-white text-center"
          />
          <span className="text-zinc-400">%</span>
        </div>
      </div>
    </div>
  );
}
