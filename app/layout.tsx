import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Maha Attique - Portfolio',
  description: 'Professional portfolio showcasing my projects and skills',
};

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-website' : ''; // Determine basePath dynamically for production

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Include the correct path for assets */}
        <link rel="stylesheet" href={`${basePath}/globals.css`} />
      </head>
      <body className="bg-primary-light text-text-dark">
        {/* Base wrapper */}
        <div id="base" data-base-path={basePath}>
          {children}
        </div>
      </body>
    </html>
  );
}
