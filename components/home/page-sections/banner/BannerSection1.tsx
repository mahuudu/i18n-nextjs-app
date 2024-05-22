import {Box} from '@mui/material';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Navigation, Autoplay, Pagination} from 'swiper/modules';

import Link from 'next/link';
import Image from 'next/image';
// ======================================================

const BannerSection1 = ({banner}: any) => {
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation
        loop={true}
        centeredSlides={false}
        className="slider"
        autoplay={true}
        modules={[Pagination, Autoplay, Navigation]}
        breakpoints={{
          991: {
            slidesPerView: 1,
            autoplay: false,
          },
          768: {
            slidesPerView: 1,
            autoplay: false,
          },
          567: {
            slidesPerView: 1,
            autoplay: false,
          },
        }}
      >
        {banner &&
          banner.length > 0 &&
          banner.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              {item.type === 'Component' ? (
                <>{item.component}</>
              ) : (
                <div style={{position: 'relative', height: '490px'}}>
                  <Link href={item?.link} passHref>
                    <Image
                      src={item.imgUrl}
                      fill
                      alt={item?.title || ''}
                      sizes="(min-width: 808px) 100vw, 100vw"
                      style={{
                        objectFit: 'cover', 
                      }}
                    />
                  </Link>
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default BannerSection1;
