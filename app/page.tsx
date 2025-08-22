"use client"
import { useEffect } from "react"

export default function KapitanZacharPage() {
  useEffect(() => {
    // Automatyczne przekierowanie na Kick po wejściu na stronę
    window.location.href = "https://kick.com/lesiu_uu"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-8"></div>
        <h1 className="text-3xl font-bold text-green-400 mb-4">PRZEKIEROWYWANIE...</h1>
        <p className="text-lg text-gray-300 mb-6">Zaraz zostaniesz przekierowany na Kick</p>
        <a
          href="https://kick.com/lesiu_uu"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-colors"
        >
          KLIKNIJ TUTAJ JEŚLI NIE ZOSTAŁEŚ PRZEKIEROWANY
        </a>
      </div>
    </div>
  )
}
