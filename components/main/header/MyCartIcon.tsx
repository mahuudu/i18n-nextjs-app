import { useCartContext } from "@/contexts/cart";
import { Badge, Typography } from "@mui/material";
import Link from "next/link";

export const MyCartIcon = () => {
  const {getCountCart} = useCartContext();
  const countCart = getCountCart();

  return (
    <Link href="/prepaid/checkout">
      <Typography
        variant="body1"
        mb={0}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="my-cart-prepaid-wrap"
      >
        <Badge
          badgeContent={countCart > 0 ? <>{countCart}</> : null}
          color="error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              stroke="#01384F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M2.667 4h1.632c1.313 0 1.969 0 2.497.241.465.213.86.555 1.135.985.314.489.407 1.138.592 2.437l1.62 11.34c.186 1.3.279 1.949.592 2.437.277.43.67.773 1.136.985.528.242 1.184.242 2.496.242h4.662c2.7 0 4.051 0 5.126-.504a5.333 5.333 0 002.288-2.048c.62-1.013.769-2.355 1.067-5.039l.122-1.094c.128-1.156.192-1.734.012-2.193a2 2 0 00-.812-.973c-.42-.26-1-.3-2.16-.38L8.762 9.333M13.333 28a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0zm12 0a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0z"
            ></path>
          </svg>
        </Badge>
        <span className="text-normal font-medium ml-2">Cart</span>
      </Typography>
    </Link>
  );
};
