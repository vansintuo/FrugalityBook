
import React from "react";
import SellForm from "../components/containers/layouts/sellForm";
const SellProduct = ({user}) => {
  console.log('user sell product :::::::::::::::', user)
  return (
    <div>
      <div>
        <SellForm onOpen={true} user={user}/>
      </div>
    </div>
  );
};

export default SellProduct;
