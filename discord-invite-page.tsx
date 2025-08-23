import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DiscordInvitePage() {
  const discordInviteLink = "https://discord.gg/Jg6rPnprHp"

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#282b5a] via-[#3a3f80] to-[#2a4a8a] p-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-indigo-500 opacity-15 blur-3xl animate-pulse delay-400" />
        {/* Stars/dots */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Discord Logo */}
      <div className="absolute top-4 left-4 flex items-center text-white text-lg font-semibold">
        <Image src="/placeholder.svg?height=24&width=24" alt="Discord Logo" width={24} height={24} className="mr-2" />
        Discord
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-[#36393f] p-8 shadow-lg text-white">
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="User Profile Picture"
            width={96}
            height={96}
            className="rounded-full mb-4"
          />
          <p className="text-sm text-gray-300 mb-2">mxnstero777__ invited you to join</p>
          <h2 className="text-2xl font-bold mb-2">
            <a
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Zacharownia
            </a>
          </h2>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              1,038 Online
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-1" />
              5,530 Members
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="displayName" className="block text-sm font-semibold text-gray-200 mb-2">
              Display Name
            </label>
            <Input
              id="displayName"
              placeholder="What should everyone call you?"
              className="w-full bg-[#202225] border border-[#202225] text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              This is how others see you. You can use special characters and emoji.
            </p>
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-200 mb-2">
              Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="bg-[#202225] border border-[#202225] text-white">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="bg-[#202225] text-white">
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  {/* Add more months */}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-[#202225] border border-[#202225] text-white">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent className="bg-[#202225] text-white">
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-[#202225] border border-[#202225] text-white">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-[#202225] text-white">
                  {Array.from({ length: 100 }, (_, i) => (
                    <SelectItem key={2025 - i} value={String(2025 - i)}>
                      {2025 - i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            By clicking "Create Account," you agree to Discord's{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>{" "}
            and have read the{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <Button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold py-2 rounded-md">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}
