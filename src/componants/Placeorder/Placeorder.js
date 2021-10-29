import React from "react";
import { useParams } from "react-router";

const Placeorder = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>this is place order</h1>
      <h2>id: {id}</h2>
    </div>
  );
};

export default Placeorder;
