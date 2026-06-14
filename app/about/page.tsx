export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-8 sm:items-start">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            About Me
          </h1>
          <p className="max-w-[600px] text-zinc-600 md:text-lg">
            I am a software developer with experience working in consulting and data analytics
          </p>
        </div>
      </main>
    </div>
  );
}
