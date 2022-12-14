import React, { useState, useEffect } from 'react';

import Product from './Product/Product';
import useStyles from './productsStyles';
import { fetchProductsFromCommerce } from 'lib/commerce';

const Products = () => {
  const[products, setProducts] = useState([]);

  useEffect( () => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await fetchProductsFromCommerce();
    setProducts(data);
  }

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.gridStyles}>
        {products.map( (p) => (
          <div key={p.id} className='item'>
            <Product product={p} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Products;
