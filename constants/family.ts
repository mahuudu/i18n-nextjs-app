export const listPlanMonth= [
    {label: '1 Month', value: 1},
    {label: '3 Months', value: 3},
    {label: '6 Months', value: 6},
    {label: '12 Months', value: 12},
]

export const isPromotionOn = (planSelect: any, periodic: number) => {
    return planSelect?.is_promotions && planSelect?.is_promotions[periodic.toString()] === "on";
};

export const MAX_LINE_FAMILY = 5;
export const MIN_LINE_FAMILY = 2;
