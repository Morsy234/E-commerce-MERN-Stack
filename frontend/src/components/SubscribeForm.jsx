import React from "react";

const SubscribeForm = () => {

     const onSubmitHandler = (e) => {
        e.preventDefault();
     }

  return (
    <div className="text-center">
      <p className="font-Outfit text-2xl font-medium text-gray-800">
        Subscribe Now and Get 20% Off
      </p>
      <p className="text-gray-400 mt-3 ">
        "Don’t miss out on our exclusive offers, designed to give you unbeatable
        value on the products you love! For a limited time, enjoy massive
        discounts on selected items, making it easier than ever to elevate your
        style without breaking the bank. Whether you're treating yourself or
        someone special, now’s the perfect time to shop and save. Hurry, these
        deals won’t last long—grab your favorites before they’re gone and take
        advantage of the biggest savings of the season!"
      </p>
      <form onSubmit={onSubmitHandler} className="font-Outfit w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full flex-1 outline-none"
          type="email"
          placeholder="Enter yout email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;