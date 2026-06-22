import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
  // Fetch the SVG data dynamically from Iconify
  const res = await fetch('https://api.iconify.design/game-icons.json?icons=capybara');
  const data = await res.json();
  
  // Extract all path 'd' attributes from the SVG body
  // (Next.js OG / Satori requires React elements, so we parse the raw string into arrays)
  const body = data.icons?.capybara?.body || '';
  const paths = Array.from(body.matchAll(/d="([^"]+)"/g)).map((m) => m[1]);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="#efe5c0"
        >
          {paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}