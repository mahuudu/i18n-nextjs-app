import ProductCard1List from '@/components/home/products/ProductCard1List';
import {createTranslation} from '@/i18n/server';
import {Suspense} from 'react';
import {Container} from '@mui/material';
import {NEXT_PUBLIC_URL_VARIABLE} from '@/constants/common';
import SectionBanner from '@/components/home/page-sections/banner/BannerHome';
import SectionPlan from '@/components/home/page-sections/plans';
import SectionProducts from '@/components/home/page-sections/products';

async function getData() {
  try {
    const env = process.env.NEXT_PUBLIC_URL || NEXT_PUBLIC_URL_VARIABLE;
    const URL = `${env + '/products?pageSize=12'}`;
    const res = await fetch(URL);

    if (!res.ok) {
      return {data: {data: []}};
    }

    const json = await res.json();

    return json;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {data: {data: []}};
  }
}

async function getPlans() {
  try {
    const env = process.env.NEXT_PUBLIC_URL || NEXT_PUBLIC_URL_VARIABLE;
    const URL = `${env + '/plans/family'}`;
    const res = await fetch(URL);

    if (!res.ok) {
      return {data: {data: []}};
    }

    const json = await res.json();

    return json;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {data: {data: []}};
  }
}

const IndexPage = async ({params: {locale}}) => {
  const [data, plans] = await Promise.all([getData(), getPlans()]);

  const listProduct = data?.data?.data;
  const listPlans = plans?.data || [];

  const {t} = await createTranslation(locale, 'home');

  return (
    <div>
      <div className="section-banner">
        <SectionBanner></SectionBanner>
      </div>
      <div className="section-plans">{/* <SectionPlan t={t} listPlans={listPlans} /> */}</div>
      <div className="section-products">
        <SectionProducts t={t} listProduct={listProduct} />
      </div>
    </div>
  );
};

export default IndexPage;
