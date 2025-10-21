import React from 'react'
import Title from './Title'
import { useState } from 'react'
import { useEffect ,useContext} from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';



function LatestCollection() {

  const [latestProducts, setLatestProducts] = useState([]);
  const {products} = useContext(ShopContext);
  useEffect(() => {
    // Simulate fetching data from an API
   // console.log(products);
    setLatestProducts(products.slice(0, 10)); // Get the first 5 products as the latest collection
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          The wait is over — our hottest drop is here! Fresh, fearless, and full of attitude, this collection is made for trendsetters who aren’t afraid to stand out. Discover unique pieces that redefine cool and turn every look into a statement. Don’t sleep on it — grab yours before they’re gone!
        </p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      </div>
  )
}

export default LatestCollection
