import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default async function Icon() {
  const res = await fetch(
    'https://api.iconify.design/game-icons.json?icons=capybara'
  );

  const data = (await res.json()) as {
    icons?: {
      capybara?: {
        body?: string;
      };
    };
  };

  const body = data.icons?.capybara?.body ?? '';

  const paths = [...body.matchAll(/d="([^"]+)"/g)].map(
    (match: RegExpMatchArray) => match[1]
  );

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