import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse rendering a black square with a cream cat outline
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
          viewBox="0 0 256 256"
          fill="none"
          stroke="#efe5c0"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M216,40,185.1,70.9a95.5,95.5,0,0,0-114.2,0L40,40V128a88,88,0,0,0,176,0Z" />
          <circle cx="92" cy="140" r="10" fill="#efe5c0" stroke="none" />
          <circle cx="164" cy="140" r="10" fill="#efe5c0" stroke="none" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}