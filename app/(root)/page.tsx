import React, {Suspense} from 'react'
import DataTest from "@/components/data-test";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const HomePage = async () => {
  await delay(1000);

  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <DataTest/>
      </Suspense>
    </div>
  )
}
export default HomePage
