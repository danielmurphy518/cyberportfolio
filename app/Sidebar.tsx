'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const navItems = [
  { name: 'home', href: '/', icon: 'ph:house' },
  { name: 'projects', href: '/projects', icon: 'ph:wrench' },
  { name: 'experience', href: '/experience', icon: 'ph:briefcase' },
  { name: 'contact', href: '/contact', icon: 'ph:envelope' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let isThrottled = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore navigation if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement || 
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey || e.ctrlKey || e.altKey
      ) {
        return;
      }

      const char = e.key.toLowerCase();
      // Match first letter of nav names (h, a, p, e, c)
      const item = navItems.find((n) => n.name.charAt(0) === char);

      if (item) {
        e.preventDefault();
        router.push(item.href);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;

      // Avoid navigating if we're in a form
      if (
        e.target instanceof HTMLInputElement || 
        e.target instanceof HTMLTextAreaElement
      ) return;

      // Threshold to ignore tiny accidental scrolls
      if (Math.abs(e.deltaY) < 50) return;

      const currentIndex = navItems.findIndex((item) => item.href === pathname);

      if (e.deltaY > 0 && currentIndex < navItems.length - 1) {
        // Scrolled down -> Go to next page
        isThrottled = true;
        router.push(navItems[currentIndex + 1].href);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scrolled up -> Go to previous page
        isThrottled = true;
        router.push(navItems[currentIndex - 1].href);
      }

      if (isThrottled) {
        setTimeout(() => { isThrottled = false; }, 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [router, pathname]);

  return (
    <aside className="fixed top-0 left-0 h-screen w-16 flex flex-col border-r border-[#171717] bg-[--background] z-50 text-xs">
      <nav className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden pt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-3 transition-colors flex justify-center items-center group active:scale-95 ${
                isActive ? 'bg-[#171717] text-[#efe5c0]' : 'text-[#171717] hover:bg-[#171717] hover:text-[#efe5c0]'
              }`}
              title={item.name}
            >
              {/* The "elegant" separator: a top border that doesn't reach the right edge */}
              {!isActive && (
                <div className="absolute top-0 left-0 right-2 border-t border-[#171717] opacity-20 group-first:hidden" />
              )}
              <div className="flex gap-2 items-center">
                <Icon icon={item.icon} width={20} height={20} />
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-1 p-1 border-t border-[#171717]">
        <a
          href="https://github.com/danielmurphy518"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 border border-[#171717] hover:bg-[#171717] hover:text-[#efe5c0] flex items-center justify-center transition-colors"
          title="GitHub"
        >
          <Icon icon="ph:github-logo" width={18} height={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/danielmurphy97"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 border border-[#171717] hover:bg-[#171717] hover:text-[#efe5c0] flex items-center justify-center transition-colors"
          title="LinkedIn"
        >
          <Icon icon="ph:linkedin-logo" width={18} height={18} />
        </a>
      </div>
    </aside>
  );
}