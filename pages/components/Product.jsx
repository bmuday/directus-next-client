import React from "react";

export default function Product({ product }) {
  const { name, price } = product;
  return (
    <div>
      {name} - {price}$
    </div>
  );
}
