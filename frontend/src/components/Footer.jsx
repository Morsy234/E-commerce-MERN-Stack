import {assets} from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-400">
           We appreciate your trust in us as your source for contemporary style and quality. Every product and service we offer is crafted with care to elevate your shopping journey. Stay inspired—subscribe to our newsletter for curated collections, special rewards, and the latest updates from our world of style.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="font-Outfit">Home</li>
            <li className="font-Outfit">About us</li>
            <li className="font-Outfit">Delivery</li>
            <li className="font-Outfit">Privacy Policy</li>
          </ul>
        </div>

         <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="font-Outfit">+20 01200774295</li>
            <li className="font-Outfit">mohamedmorsy477@gmail.com</li>
          </ul>
        </div>

        

      </div>
    </div>
  )
}

export default Footer
