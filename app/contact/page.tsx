'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('SENDING');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mrevrbbn", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-mono">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-8 sm:items-start text-[#171717]">
        <div className="flex flex-col items-center gap-4 sm:items-start w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact
          </h1>
          <div className="space-y-3 w-full max-w-xl">
          {/* Intro Box */}
          <div className="border border-[#171717] py-2 px-3 md:px-4 overflow-hidden rounded-md">
            <div className="text-sm space-y-2 leading-relaxed">
              <p>
                With a background in Computer Science and experience designing and implementing BI and CRM software, I'm capable and willing to work on any software development project as a contractor. Please use the form below to send an inquiry.
              </p>
            </div>
          </div>

          {/* Form Box - Toned Down */}
          <div className="border border-[#171717] py-3 px-3 md:px-4 transition-all duration-200 overflow-hidden rounded-md">
            <div className="flex mb-3 border-b border-[#171717] pb-3 header items-end justify-between gap-3">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-bold uppercase">Contact</span>
              </div>
            </div>

            {status === 'SUCCESS' ? (
              <div className="py-32 flex items-center justify-center text-center">
                <p className="text-sm font-bold uppercase tracking-tighter">
                  Your message has been sent, thank you.
                </p>
              </div>
            ) : (
              <>
                <div className="max-w-full overflow-hidden">
                  <form 
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase opacity-70 font-bold">Name</span>
                      <input 
                        name="name"
                        type="text" 
                        placeholder="Your name"
                        required
                        className="bg-transparent border border-[#171717]/30 p-2 text-xs outline-none focus:border-[#171717] transition-colors placeholder:text-[#171717]/30"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase opacity-70 font-bold">Email</span>
                      <input 
                        name="email"
                        type="email" 
                        placeholder="Your email address"
                        required
                        className="bg-[#171717]/5 border border-[#171717]/40 p-2 text-xs outline-none focus:border-[#171717] transition-colors placeholder:text-[#171717]/30"                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase opacity-70 font-bold">Message</span>
                      <textarea 
                        name="message"
                        rows={4}
                        placeholder="Write your message here..."
                        required
                        className="bg-transparent border border-[#171717]/30 p-2 text-xs outline-none focus:border-[#171717] transition-colors resize-none placeholder:text-[#171717]/30"
                      />
                    </div>
                  </form>
                </div>

                <div className="footer actions border-t border-[#171717] pt-2 mt-4">
                  <button 
                    type="submit"
                    form="contact-form"
                    disabled={status === 'SENDING'}
                    className="text-[#171717]/80 hover:text-[#171717] text-xs transition-colors flex items-center group cursor-pointer disabled:opacity-50"
                  >
                    <span className="font-bold underline underline-offset-4 group-hover:no-underline tracking-tighter uppercase">
                      {status === 'IDLE' && 'Send Message'}
                      {status === 'SENDING' && 'Transmitting...'}
                      {status === 'ERROR' && 'Error: Try Again'}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
