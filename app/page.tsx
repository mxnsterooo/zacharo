"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const kickUrl = "https://kick.com/kapitanzachar"

  useEffect(() => {
    window.location.href = kickUrl
  }, [kickUrl])

  const handleRedirect = () => {
    window.location.href = kickUrl
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
      <div className="text-center space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Przekierowanie na Kick</h1>
          <p className="text-white/80 text-lg">Przekierowywanie na kanał kapitanzachar...</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Przekierowywanie...</span>
          </div>

          <Button
            onClick={handleRedirect}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Przejdź teraz na Kick
          </Button>
        </div>

        <p className="text-white/60 text-sm">
          Lub kliknij{" "}
          <a
            href={kickUrl}
            className="text-white underline hover:text-green-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            tutaj
          </a>{" "}
          aby przejść ręcznie
        </p>
      </div>
    </div>
  )
}
