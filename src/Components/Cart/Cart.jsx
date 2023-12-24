import React, { useContext, useEffect, useState } from 'react';
import { getStoredItem } from "../../../CartContext/CartProvider";
import { productProvider } from '../../../ProductsContext/ProductsContext';
import ProductItem from '../Share/ProductItem/ProductItem';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
const Cart = () => {
  const { products } = useContext(productProvider);
  const localItems = getStoredItem();

  // Use filter instead of creating a new array
  const savedCart = products.filter(product => localItems[product.id]);

  const [localCart, setLocalCart] = useState(savedCart);

  useEffect(() => {
    setLocalCart((savedCart)=> savedCart= savedCart);
  }, []); // Update localCart when savedCart changes
  return (
    <div className='container py-[40px]'>
      <div className="flex gap-[10px]">
        { localCart.length !== 0 &&
          localCart.map((elm, idx) =><CartItem key={idx} cartItem={elm}></CartItem>)
        }
        {
          localCart.length <= 0 &&
          <div className='py-[50px] w-full flex gap-5 flex-col justify-center items-center'>
            <GiShoppingCart className='text-[100px] text-red-400' />
              <h1 className='text-4xl font-bold text-blue-400 pb-2'>Your Cart is Empty</h1>
              <Link to='/shop' className='text-md border py-[5px] px-[20px] bg-blue-700 text-white rounded-md'>Go To Shop</Link>
          </div>
        }
      </div>
    </div>
  );
}

export default Cart;
