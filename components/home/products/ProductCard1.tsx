'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Box, Card, CardContent, Typography} from '@mui/material';

import {styled} from '@mui/system';
import {orderBy} from 'lodash';
import {useTheme} from '@mui/material/styles';
import {formatPrice} from '@/helper/formatNumber';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FlexBox from '@/components/common/flex-box/FlexBox';
import CustomButton from '@/components/common/button/CustomButton';
import fackBackimage from '@/public/common/logo.svg';

const AirVoiceCard = styled(({hoverEffect, children, ...rest}: any) => <Card {...rest}>{children}</Card>)(
  ({theme, hoverEffect}) => ({
    overflow: 'unset',
    borderRadius: '8px',
    transition: 'all 250ms ease-in-out',
    '&:hover': {
      ...(hoverEffect && {
        boxShadow: theme.shadows[3],
      }),
    },
  }),
);

const StyledTagMobileCard = styled(AirVoiceCard)(({theme}) => {
  return {
    height: '100%',
    margin: 'auto',
    display: 'flex',
    overflow: 'hidden',
    background: 'white',
    borderRadius: '24px',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 250ms ease-in-out',
    ':hover': {
      '& .hover-box': {
        opacity: 1,
      },
    },
    border: `1px solid ${theme.palette.grey[200]}`,
    boxShadow: 'unset',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px',
    },
  };
});
const ImageWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const ContentWrapper = styled(Box)(() => ({
  padding: '1rem',
  '& .title, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})); // ========================================================

// ========================================================
const ProductCard1 = (props: any) => {
  const {id, slug, title, hoverEffect, styleButton, classButton = '', phone} = props;

  const variants = props.variants || [];

  const price = variants.length > 0 && orderBy(variants, ['release_price'], ['asc'])[0].release_price;
  const retail_price = variants.length > 0 && orderBy(variants, ['retail_price'], ['asc'])[0].retail_price;

  console.log('phone', phone);

  const theme: any = useTheme();

  return (
    <StyledTagMobileCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <Card
          style={{
            border: 'none',
            boxShadow: 'none',
            // background: `linear-gradient(105deg, #FFF 13.45%, ${theme.palette.barndMixGradients[400]} 44.67%, rgba(155, 73, 171, 0.00) 95.57%)`,
          }}
        >
          <CardContent>
            <Link href={`/prepaid/phone/${slug}`} passHref>
              <Image
                src={(phone?.image && phone?.image) || fackBackimage}
                width={144}
                height={178}
                alt={title}
                style={{
                  maxHeight: '220px',
                  objectFit: 'contain',
                }}
                unoptimized
              />
            </Link>
          </CardContent>
        </Card>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox sx={{flexDirection: 'column'}}>
          <Box flex="1 1 0" minWidth="0px">
            <Link href={`/phone/${slug}`}>
              <Typography
                variant="h3"
                fontSize="18px"
                fontWeight="500"
                lineHeight="1.3"
                textAlign={'left'}
                color="black.main"
              >
                {props?.make} {title}
              </Typography>
            </Link>

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box
                fontWeight="600"
                color="primary.main"
                lineHeight="1.3"
                sx={{
                  fontSize: '24px',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '18px',
                  },
                }}
              >
                {formatPrice(price)}
              </Box>

              <Typography variant="body2" color="grey.400" fontWeight="400" sx={{mb: 0}}>
                <del>{formatPrice(retail_price)}</del>
              </Typography>
            </FlexBox>
          </Box>

          <Box flex="1 1 0" minWidth="0px">
            <Link href={`/prepaid/phone/${slug}`}>
              <CustomButton
                color="primary"
                variant="contained"
                sx={{
                  padding: '12px 22px',
                  width: '100%',
                  mt: 3,
                  fontWeight: 500,
                  boxShadow: 'unset',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '12px',
                    lineHeight: '24px',
                  },
                }}
                className={classButton}
                {...styleButton}
              >
                Select now <ChevronRightIcon />
              </CustomButton>
            </Link>
          </Box>
        </FlexBox>
      </ContentWrapper>
    </StyledTagMobileCard>
  );
};

export default ProductCard1;
