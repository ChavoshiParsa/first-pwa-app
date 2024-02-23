import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-full w-full bg-zinc-950 flex flex-col justify-start items-center p-4 text-slate-100 space-y-12">
      <h1 className="sm:text-8xl text-5xl mt-10 animate-colorize">Accessory</h1>
      <span className="text-4xl">
        Location: <span className="text-red-500">Tabriz</span>
      </span>
      <p className="animate-pulse text-4xl text-blue-300">Coming soon...</p>
      <Link
        className="text-3xl hover:text-pink-300 text-pink-500"
        href="https://www.instagram.com/accessory_ay_"
      >
        Instagram
      </Link>
      <div className="text-9xl animate-bounce">🌙</div>
    </main>
  );
}
