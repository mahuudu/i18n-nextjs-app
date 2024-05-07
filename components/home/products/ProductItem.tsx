import {formatNumber} from '@/helper/formatNumber';

import {Button, Grid, Skeleton, Typography, useMediaQuery} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProductItem = (props: any) => {
  const {phone} = props;
  return (
    <Grid item lg={3} md={3} sm={6} xs={6} key={phone.id}>
      <div>
        <Link passHref href={`/products/${phone?.slug}`}>
          <div className="">
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '28px',
                mb: 0,
              }}
              color="black.main"
            >
              {phone.name}
            </Typography>
          </div>
        </Link>
        <Link
          passHref
          href={`/prepaid/products/${phone?.slug}`}
          className="mt-auto"
        >
          <div className="flex items-center justify-center py-3">
            <Image
              src={phone?.image || ''}
              priority={true}
              alt="phone-avatar"
              width={116}
              height={144}
              className="object-contain"
            />
          </div>
        </Link>

        <div className="p-4 max-md:py-1 flex flex-col gap-y-3 ">
          <div className="flex flex-col items-center">
            <div className="flex gap-[6px] items-center justify-center">
              <Typography
                variant="body1"
                sx={{
                  mb: 0,
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
                color="black.main"
              >
                {formatNumber(phone?.min_price)}
              </Typography>
              {phone?.max_price > phone?.min_price && (
                <Typography
                  variant="body1"
                  sx={{
                    mb: 0,
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '28px',
                  }}
                  color="black.main"
                >
                  - {formatNumber(phone?.max_price)}
                </Typography>
              )}
            </div>
            <div className="flex gap-x-1 items-center">
              <div className="h-[1px] bg-[#2F6BFF1A] w-10"></div>
              <Typography
                variant="body1"
                sx={{
                  mb: 0,
                  fontWeight: 400,
                  fontSize: '10px',
                  lineHeight: '14px',
                  color: '#98A2B3',
                }}
                className="max-md:text-[10px] max-md:leading-[14px] w-max"
              >
                Our price
              </Typography>
              <div className="h-[1px] bg-[#2F6BFF1A]  w-10"></div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 justify-between p-4 max-md:py-1 items-center">
          <Button className="w-9 h-9 flex items-center justify-center min-w-9 bg-[#864b97] rounded-lg">
            <div className="flex relative">
              {/* <Image
                src={IconPlus}
                alt="icon-plus"
                className="absolute -right-[2px] -top-[2px]"
              /> */}
            </div>
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default ProductItem;
