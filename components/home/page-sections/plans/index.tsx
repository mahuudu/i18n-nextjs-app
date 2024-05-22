import {Button, Container, Typography} from '@mui/material';
import React from 'react';

import TitleAndDes from '@/components/home/TitleAndDes';
import SectionPlanContent from './SectionPlanContent';
import PlanInfo from './PlanInfo';
import StarPlan from '@/components/common/icons/StarPlan';
import Link from 'next/link';
import CustomButton from '@/components/common/button/CustomButton';

export default function SectionPlan(props: any) {
  const {t, listPlans = []} = props;

  return (
    <section
      className="py-20 max-md:py-6 relative section-plans"
      style={{
        background: `#9AD5EF`,
      }}
    >
      <div className="h-full">
        <Container maxWidth="xl">
          <div className="m-auto flex flex-col gap-y-[42px] max-md:gap-y-8 overflow-x-hidden ">
            
            <TitleAndDes
              title={'plans.title'}
              des={'plans.description'}
              t={t}
            />
            <SectionPlanContent listPlans={listPlans} />

            <PlanInfo />

            <Link href={'/plans'} className="m-auto max-md:w-full">
              <CustomButton
                variant="contained"
                className="min-w-[175px] max-md:w-full"
                size="medium"
                color={'blue'}
                sx={{
                  padding: '9px 16px',
                  borderRadius: '12px',
                  background: '#0397D6',
                  fontSize: '14px',
                  lineHeight: '22px',
                  fontWeight: 500,
                  textTransform: 'unset',
                  boxShadow: 'unset'
                }}
              >
                <StarPlan></StarPlan>{' '}
                <Typography mx={1}> {t('plans.morebutton')} </Typography>{' '}
                <StarPlan></StarPlan>
              </CustomButton>
            </Link>

            
          </div>
        </Container>
      </div>
    </section>
  );
}
