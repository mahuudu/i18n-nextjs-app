import BuiltInFormatsDemo from '@/components/BuiltInFormatDemo';
import SubscribeForm from '@/components/SubscribeForm';
import ProductCard1List from '@/components/home/products/ProductCard1List';
import {createTranslation} from '@/i18n/server';
import {Suspense} from 'react';
import { Typography } from '@mui/material';

async function getData() {
  console.log('process', process.env.NEXT_PUBLIC_URL);
  const URL = `${process.env.NEXT_PUBLIC_URL + 'api/products?pageSize=12'}`;

  console.log('URL', URL);
  const res = await fetch(URL);

  console.log('res', res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    return [];
  }

  return res.json();
}

// Make the page async cause we need to use await for createTranslation
const IndexPage = async ({params: {locale}}) => {
  // Make sure to use the correct namespace here.
  const data = await getData();
  const listProduct = data?.data?.data;

  console.log('data111111111', listProduct);

  const {t} = await createTranslation(locale, 'home');

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '28px',
          mb: 0,
        }}
        color="black.main"
      >
        LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading
      </Typography>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ProductCard1List listProduct={listProduct || []} />
      </Suspense> */}
    </div>
  );
};

export default IndexPage;
