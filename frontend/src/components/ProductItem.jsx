//import { useContext } from "react"
import { Link } from "react-router-dom"
//import ShopContext from "../context/ShopContextProvider"; 
//import { use } from "react";


function ProductItem({id, image, name, price}) {
  //const {currency} = use(ShopContext)
    return (

     <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
      <img
        className="hover:scale-110 transition ease-in-out"
        src={Array.isArray(image) ? image[0] : image}
        alt=""
      />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">${price}</p>
      
      
    </Link>
    
  )
}

export default ProductItem
