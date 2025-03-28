import React from 'react'
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/poduct/product-list";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const HomePage = async () => {
  await delay(1000);
  console.log(sampleData)
  return (
    <>
        <ProductList data={sampleData.products} title='newest arrivals' limit={4}/>
    </>
  )
}
export default HomePage
