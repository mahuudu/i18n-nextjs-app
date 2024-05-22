'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Typography } from "@mui/material";


interface CartItem {
  id: any;
  product_id: any;
  name: string;
  price: number;
  qty: number;
  sku: string;
  modelName: string;
  total: number;
  type: string;
  variant_id: any;
  accessory_id: any;
  colorLabel: any;
  storageLabel: any;
}

interface CartContextType {
  cart: any[];
  isValidCart: boolean;
  addToCart: (product: any, type: string) => void;
  removeFromCart: (productId: number, type: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const isValidCart = cart && cart.length > 0 ? true : false;

  const localStorageKey = "cart";

  useEffect(() => {
    const cartData = localStorage.getItem(localStorageKey);
    if (cartData) {
      const parsedCart = JSON.parse(cartData) as CartItem[];
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(cart));
    } catch (error) {}
  }, [cart]);

  const addToCart = (products: CartItem, type: string) => {
    try {
      const updatedCart = [...cart];

      if (typeof products === "object" && !Array.isArray(products)) {
        const existingItemIndex = cart.findIndex(
          (item) => item.type === products.type
        );

        if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex] = {
            ...products,
            type: products.type,
          };
        } else {
          updatedCart.push(products);
        }
      }

      if (Array.isArray(products)) {
        products.forEach((product) => {
          const existingItemIndex = cart.findIndex(
            (item) => item.type === product.type
          );

          if (existingItemIndex !== -1) {
            updatedCart[existingItemIndex] = {
              ...product,
              type: product.type,
            };
          } else {
            updatedCart.push(product);
          }
        });
      }

      setCart(updatedCart);
      setSnackbarMessage(`${products.name || ""} Added to the cart`);
      setSnackbarOpen(true);
    } catch (error: any) {
      console.log("error when add cart", error);
    }
  };

  const removeFromCart = (productId: number, type: string) => {
    const updateCart = cart.filter(
      (item) => !(item.id === productId && item.type === type)
    );
    setCart(updateCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem(localStorageKey, JSON.stringify([]));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, isValidCart, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          zIndex: 1501
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleCloseSnackbar}
          sx={{
            color: '#fff'
          }}
        >
          <Typography variant="body1" color={"white.main"} mb={0}>{snackbarMessage}</Typography>
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
