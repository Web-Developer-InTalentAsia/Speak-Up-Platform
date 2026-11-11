import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Speak Up | Share safely',
  description: 'A safe starting point for raising concerns.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
