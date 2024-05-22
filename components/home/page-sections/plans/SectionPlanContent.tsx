'use client';

import {Grid} from '@mui/material';
import React, {useState} from 'react';

import {find} from 'lodash';
import {listPlanMonth} from '@/constants/family';
import PlanItem from './PlanItem';
import FormItemCycleBtn from './FormItemCycleBtn';
import {useAddCartPrepaid} from '@/contexts/cart';
import {getBasePlanPriceById} from '@/components/common/plans';
import PlanInfo from './PlanInfo';

export default function SectionPlanContent(props: any) {
  const {t, listPlans = []} = props;

  const [selectCycle, setSelectedCycle] = useState(listPlanMonth[0].value);
  const addCartPrepaid = useAddCartPrepaid();

  const addToCart = (plan: any, months: any) => {
    try {
      const planFind: any = find(listPlans, {id: parseInt(plan?.id)});
      const pricePlan = getBasePlanPriceById(plan?.id, listPlans, selectCycle);

      const planDetail = {
        plan_detail: planFind,
        id: plan.id,
        price: !isNaN(pricePlan) ? pricePlan : '',
        autoRenewPrice: plan?.autopay_discount_amount ?? 0,
        name: plan.name,
        planType: plan.type,
        months: months,
        carrier: plan.carrier_id,
        carrier_child: plan.carrier_child ?? 0,
        voice: plan?.voice,
        sms: plan?.sms,
        as_you_go_standard_minute: plan.as_you_go_standard_minute || null,
      };

      addCartPrepaid({
        infoCartAdd: {
          field: 'plan',
          value: planDetail,
        },
        actionText: `Add ${planDetail.name}`,
        elementTarget: null,
      });

      console.log('planDetail', planDetail);
    } catch (error) {
      console.log('error addToCart', error);
    }
  };

  return (
    <>

      <div className="flex w-full justify-center plan-wrap">
        {/* <FormItemCycleBtn
          setSelectedCycle={setSelectedCycle}
          selectCycle={selectCycle}
        /> */}
      </div>

      <Grid container spacing={3} className="plan-wrap">
        {listPlans &&
          Array.isArray(listPlans) &&
          listPlans.map(item => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={3}
                key={JSON.stringify(item)}
              >
                <PlanItem
                  setSelectedCycle={setSelectedCycle}
                  selectCycle={selectCycle}
                  plan={item}
                  plans={listPlans}
                  addToCart={addToCart}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
