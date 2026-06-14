'use client';

import { Icon } from '@iconify/react';

export default function Experience() {
  const jobs = [
    {
      title: 'Senior Analyst - Data Platforms and Insights',
      company: 'Universal Music Australia',
      dates: 'September 2024 — Present',
      icon: '/images/universal.svg',
    },
    {
      title: 'Business Analyst',
      company: 'MODLR',
      dates: 'July 2022 — August 2024',
      icon: '', // Placeholder for custom SVG
    },
    {
      title: 'Software Engineering Intern',
      company: 'Benetech',
      dates: 'Jan 2022 — June 2022',
      icon: '', // Placeholder for custom SVG
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-8 sm:items-start text-[#171717]">
        <div className="flex flex-col items-center gap-4 sm:items-start w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Experience
          </h1>

          <div className="space-y-3 w-full max-w-xl">
            {/* Job entries */}
            {jobs.map((job, index) => {
            const isRecent = index === 0;
            return (
              <div key={index} className={`border border-[#171717] py-4 px-4 overflow-hidden rounded-md ${isRecent ? 'ring-1 ring-[#171717]' : ''}`}>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 border border-[#171717] flex items-center justify-center shrink-0">
                      {job.icon ? (
                        job.icon.startsWith('/') ? (
                          <img src={job.icon} alt="" className="w-5 h-5 shrink-0" />
                        ) : (
                          <Icon icon={job.icon} width={20} height={20} className="shrink-0" />
                        )
                      ) : (
                        <div className="w-2 h-2 bg-[#171717]" />
                      )}
                    </div>
                    <span className="text-base font-black uppercase tracking-tighter leading-tight">{job.title}</span>
                  </div>
                  <span className="text-sm font-bold opacity-80">{job.company}</span>
                  <p className="text-xs opacity-60 tabular-nums uppercase tracking-tight">{job.dates}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </main>
    </div>
  );
}
