import '../styles/tailwind.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import MuiTheme from '@/theme/MuiTheme';



export const metadata = {
  title: 'Next.js i18n',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{key: 'css'}}>
          <MuiTheme>{children}</MuiTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
