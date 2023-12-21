import React, { createContext, useEffect, useState } from 'react'

export const productProvider = createContext(null)
const ProductsContext = ({children}) => {
const [products, setProducts] = useState([]);
const [category, setCategory] = useState([]);
const [menus, setMenus] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


const fetchCategoryData = async () => {
  try {
    const response = await fetch('http://localhost:3000/category');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setCategory(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(error);
  } finally {
    setLoading(false);
  }
};
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setProducts(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(error);
  } finally {
    setLoading(false);
  }
};
const fetchMenuData = async () => {
  try {
    const response = await fetch('http://localhost:3000/menus');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setMenus(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(error);
  } finally {
    setLoading(false);
  }
};

useEffect(()=>{
      fetchData();
      fetchMenuData()
      fetchCategoryData()
},[])

    const allProducts = {
        products,
        menus,
        category,
        loading
    }

  return (
    <productProvider.Provider value={allProducts}>
      {children}
    </productProvider.Provider>
  )
}

export default ProductsContext
