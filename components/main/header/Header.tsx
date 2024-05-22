'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useParams} from 'next/navigation';

import {Container, Box, Grid, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import logo_header from '@/public/common/logo.svg';

import {useCallback, useRef, useState} from 'react';

import FlexBox from '@/components/common/flex-box/FlexBox';
import MainHeaderMenuItem from '@/components/main/header/MainHeaderMenuItem';
import {LocaleTypes} from '@/i18n/settings';
import TopHeader from './TopHeader';
import {useTranslation} from '@/i18n/client';
import {MyCartIcon} from './MyCartIcon';

import '@/styles/global.scss';
import Sticky from '@/components/common/sticky/Sticky';

function Header(props: any) {
  const matches = useMediaQuery('(min-width:768px)');
  const theme = useTheme();
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: any) => setIsFixed(fixed), []);

  const [open, setOpen]: any = useState(false);
  const refMenuHeader: any = useRef();

  const locale = useParams()?.locale as LocaleTypes;

  const {t} = useTranslation(locale, 'main-menu');

  return (
    <header className="mainHeader" ref={refMenuHeader}>
      {/* {notice?.content?.length > 0 && (
				<div className="marquee-box">
					<div className="container">
						<Marquee speed={40}>&nbsp;{notice?.content}&nbsp;</Marquee>
					</div>
				</div>
			)} */}
      <div className="header-wrapper">
        <div className="header-top hide-for-sticky">
          <Container maxWidth="xl">
            <TopHeader theme={theme} />
          </Container>
        </div>
        <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
          <div className="header-main">
            <Container maxWidth="xl">
              <Grid
                container
                alignItems={'center'}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Grid item md={2} xs={2} sm={2}>
                  <Link href={`/${locale}`}>
                    <Image
                      alt="Logo"
                      width={194}
                      height={43}
                      style={{objectFit: 'contain', maxWidth: '194px', width: '100%'}}
                      src={logo_header}
                    />
                  </Link>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Grid container>
                    <Grid item xs={12} sm={8} md={10} xl={10} lg={10} className="item-end-fixed">
                      <MainHeaderMenuItem open={open} />
                    </Grid>
                    <Grid
                      item
                      xs={0}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      sx={{
                        [theme.breakpoints.down('md')]: {
                          flex: '1',
                        },
                      }}
                    >
                      <div className="button justify-end h-full">
                        <FlexBox
                          sx={{
                            alignItems: 'center',
                            gap: 1,
                            [theme.breakpoints.down('md')]: {
                              display: 'none',
                            },
                          }}
                        >
                          <FlexBox sx={{alignItems: 'center', gap: '10px'}}>
                            <MyCartIcon />
                          </FlexBox>

                          <Link href="/apply" className="apply"></Link>
                        </FlexBox>
                        {!matches && (
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              [theme.breakpoints.up('lg')]: {
                                display: 'none',
                              },
                            }}
                          >
                            <MyCartIcon />
                            <button
                              onClick={() => setOpen(!open)}
                              className={open ? 'navTrigger active' : 'navTrigger'}
                              id="navTrigger"
                            >
                              <svg viewBox="0 0 64 48">
                                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                              </svg>
                            </button>
                          </Box>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Sticky>
      </div>
    </header>
  );
}

export default Header;
