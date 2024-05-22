import {Button, Container, Typography} from '@mui/material';
import React, { Suspense } from 'react';

import TitleAndDes from '@/components/home/TitleAndDes';

import Link from 'next/link';
import CustomButton from '@/components/common/button/CustomButton';
import ProductCard1List from '../../products/ProductCard1List';

const  SectionProducts = async (props: any) => {
  const {t, listProduct = [] } = props;

  return (
    <section
      className="py-20 max-md:py-6 relative"
      style={{
        background: `#DFF3FA`,
      }}
    >
      <div className="h-full">
        <Container maxWidth="xl">
          <div className="m-auto flex flex-col gap-y-[42px] max-md:gap-y-8 overflow-x-hidden ">
            <TitleAndDes
              title={'products.title'}
              t={t}
            />

            <Suspense fallback={<div>Loading...</div>}>
              <ProductCard1List listProduct={listProduct || []} />
            </Suspense>

          </div>
        </Container>
      </div>
    </section>
  );
}


export default SectionProducts;