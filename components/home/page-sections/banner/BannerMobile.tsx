import {Button, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {EleMuiVariants} from '@/components/common/button/CustomButton';

import Banner from '@/public/banner/home/right_Banner.png';
import ImgEnjoy from '@/public/banner/home/enjoy.svg';

export default function BannerMobile(props: any) {
  const {t} = props;

  return (
    <div className="flex flex-col justify-center gap-y-5">
      <div className="flex flex-col gap-y-5 items-center">
        <div
          style={{
            width: '147px',
            marginTop: '20px',
            marginBottom: '7px'
          }}
        >
          <Image
            src={ImgEnjoy}
            alt="enjoy"
            width={153}
            height={118}
            quality={100}
          />
        </div>
        <div>
          <div className="md:flex gap-x-[6px] items-end text-center sm:text-left">
            <Typography
              mb={0}
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              {t('banner.banner1.free')}
            </Typography>
            <Typography
              mb={0}
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              {t('banner.banner1.call')}
            </Typography>
          </div>
          <Typography
            mb={0}
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              color: 'rgba(0, 0, 0, 0.70)',
            }}
          >
            {t('banner.banner1.include')}{' '}
            <strong> {t('banner.banner1.country')}</strong>
          </Typography>
        </div>
        <Link href="/plans">
          <Button
            variant={EleMuiVariants.OrangePrimary}
            size="large"
            sx={{
              height: '54px',
              padding: '12px 42px',
              boxShadow: '0px 36px 34px 0px #4A1FB84D',
              borderRadius: '24px',
              background: 'linear-gradient(90deg, #FF971B 0%, #FF7043 100%)',
              textTransform: 'capitalize',
            }}
          >
            <Typography
              mb={0}
              sx={{
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '30px',
                color: '#fff',
              }}
            >
              {t('banner.banner1.switch')}{' '}
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="max-w-[366px] max-h-[206px] m-auto">
        <Image
          width={366}
          height={206}
          src={Banner}
          alt="ILD Call"
          quality={100}
          unoptimized
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}
