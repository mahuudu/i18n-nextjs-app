import '../styles/tailwind.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';

export const metadata = {
  title: 'Next.js i18n',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="p-3">
        <AppRouterCacheProvider options={{key: 'css'}}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
