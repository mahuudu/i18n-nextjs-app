'use client';
import React from 'react';

import {useMediaQuery} from '@mui/material';
import {useParams} from 'next/navigation';
import {LocaleTypes} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';

import BannerPrePaid1 from './BannerPrePaid1';
import BannerSection1 from '@/components/home/page-sections/banner/BannerSection1';
import banner01 from '@/public/banner/home/banner03.webp';
import banner02 from '@/public/banner/home/eSims_AirVoice.png';

import BannerMobile from './BannerMobile';

export default function SectionBanner() {
  let locale = useParams()?.locale as LocaleTypes;

  const {t} = useTranslation(locale, 'home');

  const bannerDesktop = [
    {
      type: 'Component',
      component: <BannerPrePaid1 t={t} />,
    },
  ];

  const isTablet = useMediaQuery('(max-width: 769px)');

  if (isTablet) {
    return (
      <section
        style={{
          background: `linear-gradient(180deg, #90C4E8 -1.66%, #90C4E8 46.3%, rgba(255, 255, 255, 0) 101.5%)`,
        }}
      >
        <div
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <BannerSection1
            banner={[
              {
                type: 'Component',
                component: <BannerMobile t={t} />,
              },
            ]}
          />
        </div>
      </section>
    );
  }
  return (
    <section
      style={{
        background: `linear-gradient(180deg, #90C4E8 -1.66%, #90C4E8 46.3%, rgba(255, 255, 255, 0) 101.5%)`,
      }}
    >
      <div
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
        }}
      >
        {' '}
        <BannerSection1 banner={bannerDesktop} />
      </div>
    </section>
  );
}
