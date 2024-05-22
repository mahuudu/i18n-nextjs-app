import {Button, Container, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Banner from '@/public/banner/home/right_Banner.png';
import ImgEnjoy from '@/public/banner/home/enjoy.svg';

// =============================================================
const BannerPrePaid1 = (props: any) => {
  const {t} = props;

  return (
    <Container maxWidth="lg">
      <div
        className="flex justify-center"
        style={{
          padding: '32px 32px 0px 32px',
        }}
      >
        <div className="flex flex-col flex-none items-start">
          <div
            style={{
              marginBottom: '16px',
            }}
          ></div>
          <div
            className="flex "
            style={{
              gap: '12px',
              alignItems: 'end',
            }}
          >
            <Typography
              mb={0}
              sx={{
                fontWeight: 700,
                fontSize: '60px',
                lineHeight: '72px',
                color: '#000',
              }}
            >
              {t('banner.banner1.free')}
            </Typography>
          </div>

          <Typography
            mb={0}
            sx={{
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: '72px',
              color: '#000',
            }}
          >
            {t('banner.banner1.call')}
          </Typography>
          <Typography
            mb={0}
            sx={{
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '30px',
              color: 'rgba(0, 0, 0, 0.70)',
            }}
          >
            {t('banner.banner1.include')} <strong> {t('banner.banner1.country')}</strong>
          </Typography>
          <Link href="/plans">
            <Button
              size="small"
              sx={{
                marginTop: '32px',
                height: '64px',
                padding: '19px 80px',
                boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.15)',
                borderRadius: '24px',
                background: 'linear-gradient(90deg, #FF971B 0%, #FF7043 100%)',
                textTransform: 'capitalize',
              }}
            >
              <Typography
                variant="body1"
                mb={0}
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '26px',
                  color: '#fff',
                }}
              >
                {t('banner.banner1.switch')}{' '}
              </Typography>
            </Button>
          </Link>
        </div>
        <div
          style={{
            maxWidth: '947px',
            maxHeight: '480px',
            display: 'flex',
          }}
        >
          <Image
            width={947}
            height={480}
            src={Banner}
            alt="Free"
            quality={100}
            unoptimized
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default BannerPrePaid1;
