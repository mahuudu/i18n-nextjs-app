import React from 'react';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
import {formatPrice} from '@/helper/formatNumber';
import {ONE_MONTH} from '@/constants/plan';

import {
  getBasePlanPriceById,
  getDiscountedExistingPlanPriceById,
} from '@/components/common/plans';

import CustomButton from '@/components/common/button/CustomButton';

const Title = styled(Typography)(({theme}) => ({
  // Add your custom styles here
}));

const PlanItem = (props: any) => {
  const {plan, loadingCreate, addToCart, plans, isNotFound, selectCycle} =
    props;

  if (!plan && !selectCycle) {
    return null;
  }

  return (
    <>
      <div className="plan-acp-item">
        <div className="plan-acp-item-head">
          <div className="plan-acp-item-head-content py-6">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" width="100%">
                  <Title variant="h2" className="plan-name" align="center">
                    {plan.name}
                  </Title>
                  {/* {(plan?.slug === '1-gb' || plan?.slug === 'unlimited') && (
                  // <Topchoice />
                )} */}
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="plan-acp-item-content">
          <Grid container spacing={1} className="detail">
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" className="price-main">
                <Typography className="price" align="left" gutterBottom>
                  {formatPrice(
                    getBasePlanPriceById(plan?.id, plans, selectCycle) /
                      selectCycle,
                  )}
                </Typography>
                <sub>/Mo</sub>
              </Box>
            </Grid>
            {selectCycle !== ONE_MONTH && (
              <Grid item xs={12}>
                <div className="title-total text-center mb-2">
                  <Typography>
                    <strong>
                      {formatPrice(
                        getBasePlanPriceById(plan?.id, plans, selectCycle),
                      )}
                    </strong> {" "}
                    upfront payment required
                  </Typography>
                </div>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={3} className="align-center mb-6 mt-2">
            <Grid item xs={12} className="text-center">
              <CustomButton
                onClick={() => addToCart(plan, selectCycle)}
                variant="contained"
                className="custom-add-card-btn"
                disabled={isNotFound || loadingCreate}
                color={'orange'}
              >
                Select Plan
              </CustomButton>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="align-center mt-2">
            <Grid item xs={12} className="text-center">
              <Typography className="after-months" align="center">
                After {selectCycle}{' '}
                {selectCycle === ONE_MONTH ? 'month' : 'months'}, the price will
                be{' '}
                {formatPrice(
                  getDiscountedExistingPlanPriceById(
                    plan?.id,
                    plans,
                    selectCycle,
                    1,
                  ),
                )}{' '}
                for {selectCycle}{' '}
                {selectCycle === ONE_MONTH ? 'month' : 'months'}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default PlanItem;
