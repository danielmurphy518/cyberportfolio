export default function Projects() {
  const projects = [
    {
      title: 'ChartMuse',
      description: 'ChartMuse allows users to make predictions around upcoming tracks on Spotify and place bets and be paid out relative to the performance of other users. Visit here: ',
      linkText: 'chartmuse.club',
      url: 'https://chartmuse.club',
      // tech: 'Next.js • TypeScript • Tailwind CSS', // Removed as requested
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-8 sm:items-start text-[#171717]">
        <div className="flex flex-col items-center gap-4 sm:items-start w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Projects
          </h1>

          <div className="space-y-3 w-full max-w-xl">
            {projects.map((project, index) => (
            <div key={index} className="border border-[#171717] py-4 px-4 overflow-hidden rounded-md">
              <div className="flex flex-col gap-1">
                <span className="text-base font-black uppercase tracking-tighter leading-tight">{project.title}</span>
                <span className="text-sm opacity-80">
                  {project.description}
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline underline-offset-4 decoration-[#171717]/30 hover:decoration-[#171717] transition-all text-inherit"
                  >
                    {project.linkText}
                  </a>
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}
