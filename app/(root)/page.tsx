import React from 'react'

import ProductList from "@/components/shared/poduct/product-list";
import {getLatestProducts} from "@/lib/actions/product.actions";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const HomePage = async () => {
  await delay(1000);
  const latestProducts = await getLatestProducts();
  return (
    <>
        <ProductList data={latestProducts} title='newest arrivals' limit={4}/>
    </>
  )
}
export default HomePage
