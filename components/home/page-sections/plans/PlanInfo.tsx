'use client';

import React from 'react';
import {Grid, Typography, Box, Stack} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useParams} from 'next/navigation';
import {LocaleTypes} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';

function IconActive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#0397D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 12.512l2.341 2.339A14.985 14.985 0 0115.4 9.915l.101-.069M21.15 12a9.15 9.15 0 11-18.3 0 9.15 9.15 0 0118.3 0z"
      ></path>
      <path
        stroke="#0397D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 12.512l2.341 2.339A14.984 14.984 0 0115.4 9.915l.101-.069"
      ></path>
    </svg>
  );
}

const PlanInfo = () => {
  const theme = useTheme();
  let locale = useParams()?.locale as LocaleTypes;

  const {t} = useTranslation(locale, 'home');

  return (
    <Box className="plan-info">
      <Grid
        container
        sx={{
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            justifyContent: 'left',
          },
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'left',
              },
            }}
          >
            <Box pt={0.5} mr={1}>
              <IconActive />
            </Box>
            <Typography>
              {t('plans.plan_include.unlimited_talk_text')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'left',
              },
            }}
          >
            <Box pt={0.5} mr={1}>
              <IconActive />
            </Box>
            <Typography>
              {t('plans.plan_include.nationwide_coverage')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'left',
              },
            }}
          >
            <Box pt={0.5} mr={1}>
              <IconActive />
            </Box>
            <Typography>{t('plans.plan_include.use_best_network')}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'left',
              },
            }}
          >
            <Box pt={0.5} mr={1}>
              <IconActive />
            </Box>
            <Typography>{t('plans.plan_include.unlimited_international_calling')}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlanInfo;
