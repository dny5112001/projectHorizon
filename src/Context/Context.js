// import Tileimage1 from '../Components/Assets/black-grey-white Color Palette - color-hex.com.png'

// const all_products = [
//     {
//         img:Tileimage1,
//     },
// ];

import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/allproductsHome";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
