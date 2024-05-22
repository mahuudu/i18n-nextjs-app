'use client';

import Header from '@/components/main/header/Header';
import CartProviderPrepaid from '@/contexts/cart';

export default function MainLayout({children}: {children: React.ReactNode}) {


  return (
    <div className="main-layout">
      <CartProviderPrepaid>
          <Header />
        {children}
      </CartProviderPrepaid>
    </div>
  );
}
