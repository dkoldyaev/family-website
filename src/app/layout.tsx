import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spain Rent Resume',
  description: 'Family rental application for Spain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
