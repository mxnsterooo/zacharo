import { Instagram, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KapitanZacharPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {/* Nagłówek jest teraz pusty, ale zachowujemy div dla stylów border-b */}
      </div>

      {/* Main Content Wrapper for Responsiveness - Zwiększono py */}
      <div className="px-4 py-12 md:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Profile Section - Zwiększono mb */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="Kapitan Zachar"
              width={160}
              height={160}
              className="rounded-2xl border-4 border-green-500"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mt-4 mb-2 tracking-wider text-center whitespace-nowrap">
            KAPITAN ZACHAR
          </h1>

          <div className="text-center text-gray-300 mt-2">
            <p className="text-base sm:text-lg">Kontakt biznesowy:</p>
            <p className="text-lg sm:text-xl text-green-400 font-medium">kapitanzachar@gmail.com</p>
          </div>
        </div>

        {/* Kick Stream Info - Zwiększono mb */}
        <div className="bg-gray-900 rounded-xl p-4 mb-10 border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 text-black px-3 py-1 rounded font-bold text-lg">KICK</div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white font-semibold">KICK STREAM</span>
              </div>
              <div className="text-gray-400 text-sm">Codziennie o 19:30</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {" "}
          {/* Zmieniono na sm:grid-cols-3 */}
          <Link
            href="https://instagram.com/kapitanzachar"
            className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Instagram className="w-8 h-8 text-white" />
          </Link>
          <Link
            href="https://discord.gg/UTrtsmYb"
            className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Image src="/discord-logo.ico" alt="Discord Logo" width={32} height={32} className="rounded-full" />
          </Link>
          {/* Nowy link do TikToka */}
          <Link
            href="https://www.tiktok.com/@kapitan_zachar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Image src="/tiktok-logo.png" alt="TikTok Logo" width={32} height={32} />
          </Link>
        </div>

        {/* Kick Link Button */}
        <Link
          href="https://kick.com/kapitanzachar"
          className="block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-6 rounded-xl text-center text-lg transition-colors"
        >
          OGLĄDAJ NA KICK
        </Link>

        {/* Sekcja Konkursu Klipowego */}
        <div className="mt-10 bg-gray-900 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-4 text-center">
            KONKURS KLIPOWY – KAPITANZACHAR IRL
          </h2>
          <p className="text-lg text-white mb-4 text-center">
            Do zgarnięcia: <span className="font-bold text-green-400">aż 1200 zł miesięcznie</span> + premie za zasięgi!
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">⸻ CO ROBISZ?</h3>
            <p className="text-base text-gray-400">
              Tworzysz klipy z IRL streamów KapitanZachar i wrzucasz je na social media:
            </p>
            <ul className="list-disc list-inside text-gray-400 ml-4 mt-2">
              <li>TikTok</li>
              <li>Twitter (X)</li>
              <li>Instagram (Reels)</li>
              <li>Facebook (Reels)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">⸻ NAGRODY:</h3>
            <ul className="list-disc list-inside text-gray-400 ml-4">
              <li>
                <span className="font-semibold text-white">300 zł</span> za najlepszy klip na każdej platformie (max
                1200 zł/mc)
              </li>
              <li>
                <span className="font-semibold text-white">25 zł</span> za każde 100K wyświetleń (naturalnych){" "}
                <span className="text-green-400">(tylko TikTok)</span>
              </li>
              <li>
                <span className="font-semibold text-white">250 zł</span> za każde 1M wyświetleń (naturalnych){" "}
                <span className="text-green-400">(tylko TikTok)</span>
              </li>
            </ul>
            <p className="text-base text-gray-400 mt-2">Premie za zasięgi możesz łączyć z główną nagrodą!</p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-white mb-2">Konkurs odbywa się na Discordzie!</p>
            <Link
              href="https://discord.gg/UTrtsmYb"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl text-center text-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOŁĄCZ DO DISCORDA
            </Link>
          </div>
        </div>

        {/* Najnowszy artykuł z Boop.pl */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-6 text-center">
            Najnowszy artykuł z Boop.pl
          </h2>
          <Link
            href="https://boop.pl/rozrywka/dziewczyny-zaczely-obic-to-co-ajemge1"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-xl p-4 border border-gray-700 hover:bg-gray-800 transition-colors text-center"
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/boop-article-image.jpeg"
                alt="Dziewczyny zaczęły robić to, co Ajemge1"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-white mb-2">Dziewczyny zaczęły robić to, co Ajemge1</p>
            <p className="text-sm text-gray-400">14 lip 2025 16:50 | Anna Dąbrowska</p>
            <p className="text-sm text-gray-500 mt-2">Kliknij, aby przeczytać na Boop.pl</p>
          </Link>
        </div>

        {/* X (Twitter) Clips Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-6 text-center">
            Najlepsze klipy z X
          </h2>
          <div className="space-y-6">
            {/* Clip 1 */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="relative w-full overflow-hidden rounded-lg mb-3">
                <iframe
                  src="https://platform.twitter.com/embed/Tweet.html?id=1935875150672805908&theme=dark"
                  width="100%"
                  height="auto"
                  min-height="350px"
                  className="rounded-lg max-h-[600px]"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <X className="w-4 h-4 text-white" />
                <p className="font-semibold">@sknerus_</p>
              </div>
            </div>

            {/* Clip 2 */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="relative w-full overflow-hidden rounded-lg mb-3">
                <iframe
                  src="https://platform.twitter.com/embed/Tweet.html?id=1943791538523328807&theme=dark"
                  width="100%"
                  height="auto"
                  min-height="350px"
                  className="rounded-lg max-h-[600px]"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <X className="w-4 h-4 text-white" />
                <p className="font-semibold">@sknerus_</p>
              </div>
            </div>

            {/* Clip 3 */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="relative w-full overflow-hidden rounded-lg mb-3">
                <iframe
                  src="https://platform.twitter.com/embed/Tweet.html?id=1939081974963978688&theme=dark"
                  width="100%"
                  height="auto"
                  min-height="350px"
                  className="rounded-lg max-h-[600px]"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <X className="w-4 h-4 text-white" />
                <p className="font-semibold">@sknerus_</p>
              </div>
            </div>
          </div>
          {/* Link do więcej clipów */}
          <div className="mt-6 text-center">
            <Link
              href="https://x.com/kapitanzachar"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600 transition-colors"
            >
              📱 ZOBACZ WIĘCEJ NA X
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
