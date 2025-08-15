import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NotificationProvider } from '@/components/providers/notification-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notification Modal Demo',
  description: 'Beautiful reusable notification modal system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}