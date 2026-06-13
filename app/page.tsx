export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-8 sm:items-start">
        <div className="flex flex-col items-center gap-8 sm:items-start">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Daniel Murphy
          </h1>
          <p className="max-w-[600px] text-zinc-600 md:text-xl">
            Software Engineer focusing on high-performance web applications and clean code.
          </p>
        </div>
      </main>
    </div>
  );
}
