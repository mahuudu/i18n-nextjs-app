import {Button, Grid, Skeleton, Typography, useMediaQuery} from '@mui/material';
import ProductItem from './ProductItem';

const ProductCard1List = (props: any) => {
  const {listProduct = []} = props;
  console.log('listProduct', listProduct);
  return (
    <div>
      <Grid
        container
        rowSpacing={{lg: 3, xl: 3, md: 3, sm: 3, xs: 2}}
        columnSpacing={{xs: 2, sm: 3, md: 3}}
      >
        {listProduct &&
          listProduct?.map((phone: any) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={6} key={phone.id}>
                <ProductItem phone={phone} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductCard1List;
