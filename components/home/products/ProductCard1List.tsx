import {Button, Grid, Skeleton, Typography, useMediaQuery} from '@mui/material';
import ProductItem from './ProductItem';
import ProductCard1 from './ProductCard1';

const ProductCard1List = (props: any) => {
  const {listProduct = []} = props;

  return (
    <div>
      <Grid container rowSpacing={{lg: 3, xl: 3, md: 3, sm: 3, xs: 2}} columnSpacing={{xs: 2, sm: 3, md: 3}}>
        {listProduct &&
          listProduct?.map((phone: any) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={6} key={phone.id}>
                <ProductCard1 phone={phone} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductCard1List;
