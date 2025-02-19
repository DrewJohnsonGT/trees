import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { GeistSans } from 'geist/font/sans';
import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
  title: 'Trees',
  description: 'Simple tree builder',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
