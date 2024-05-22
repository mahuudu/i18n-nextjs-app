import {isPromotionOn} from '@/constants/family';
import {find} from 'lodash';

export const getBasePlanPriceById = (
  id: number,
  listPlan: unknown,
  selectMonth: any,
): any => {
  try {
    const planSelect = find(listPlan, {id});

    if (!planSelect) {
      return '';
    }

    let price = 0;

    if (isPromotionOn(planSelect, parseInt(selectMonth))) {
      price =
        find(planSelect.array_promotion_prices, {key: parseInt(selectMonth)})?.value ?? '';
    } else {
      price = find(planSelect.array_base_prices, {key: parseInt(selectMonth)})?.value ?? '';
    }

    if (planSelect.is_promotion === 0) {
      price = parseFloat(
        find(planSelect.array_base_prices, {key: parseInt(selectMonth)})?.value ?? '',
      );
    }

    return isNaN(price) ? '' : price;
    
  } catch (error) {
    console.error('getBasePlanPriceById', error);
    return '';
  }
};

export const getDiscountedExistingPlanPriceById = (
  id: any,
  listPlan: any,
  selectMonth: any,
  totalLine: any,
) => {
  try {
    const planSelect = find(listPlan, {id: id});

    const priceBase = parseFloat(
      find(planSelect?.array_base_prices, {key: parseInt(selectMonth)})?.value,
    );

    const lineDiscount = parseFloat(
      find(planSelect?.array_line_discount, {key: totalLine})?.value,
    );

    if (isNaN(priceBase) || isNaN(lineDiscount)) {
      return 0;
    }

    const price = parseFloat(
      (priceBase - (priceBase / 100) * lineDiscount).toFixed(2),
    );

    if (!isNaN(price)) {
      return price;
    }

    return 0;
  } catch (error) {
    console.log('error getPlanPrice', error);
    return 0;
  }
};
