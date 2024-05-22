const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const USDollarNoStyle = new Intl.NumberFormat("en-US", {
  currency: "USD",
});

export const formatPrice = (price:any) => {

    if (price === null || price === "" || price === undefined || isNaN(price)) {
      return "";
    }

    return USDollar.format(price)
}