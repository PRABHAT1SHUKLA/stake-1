import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface VolatilitySwitchProps {
  isHighVolatility: boolean
  onToggle: () => void
}

export function VolatilitySwitch({ isHighVolatility, onToggle }: VolatilitySwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="volatility-mode" checked={isHighVolatility} onCheckedChange={onToggle} />
      <Label htmlFor="volatility-mode">High Volatility Mode</Label>
    </div>
  )
}

