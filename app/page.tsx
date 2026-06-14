export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-8 sm:items-start text-[#171717]">
        <div className="flex flex-col items-center gap-4 sm:items-start w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Daniel Murphy
          </h1>
          <div className="space-y-6 max-w-xl">
            <p className="text-[#171717] md:text-lg uppercase font-bold tracking-widest opacity-70">
              Developer
            </p>
            <p className="text-sm md:text-lg leading-relaxed opacity-90">
              I am a software developer with 5 years of experience working across various industries from financial consulting to music and data analysis. Throughout this time, I&apos;ve relied on a strong technical background to develop robust applications and solve complex problems.
            </p>
            <p className="text-sm md:text-lg leading-relaxed opacity-90">
              In my spare time I enjoy working on other software projects, playing classical guitar, and working out.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
