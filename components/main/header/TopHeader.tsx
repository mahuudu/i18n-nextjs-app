import ChangeLocale from '@/components/ChangeLocale';
import {Grid} from '@mui/material';

const TopHeader = (props: any) => {
  const {theme} = props;
  return (
    <>
      <div className='top-header-content'>
        <Grid
          container
          alignItems={'center'}
          sx={{
            [theme.breakpoints.down('md')]: {
              justifyContent: 'space-between',
            },
          }}
        >
          <Grid item sm={0} md={0} xl={2} lg={2}></Grid>
          <Grid
            item
            sm={0}
            md={0}
            xl={10}
            lg={10}
            className="flex justify-end items-center"
          >
            <div>
              <ChangeLocale />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TopHeader;
