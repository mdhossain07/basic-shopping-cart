/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from "react";

const ProductData = ({ product, onCounter, count, handleProductDetails }) => {
  const [counting, setCounting] = useState(0);

  return (
    <tr className="bg-white border-b ">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {product?.name}
      </td>
      <td className="px-6 py-4">{product.color}</td>
      <td className="px-6 py-4">{product?.brand}</td>
      <td className="px-6 py-4">${product?.price}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => {
            onCounter(count + 1);
            setCounting(counting + 1);
            handleProductDetails({
              id: product?.id,
              name: product?.name,
              price: product?.price,
              quantity: counting + 1,
            });
          }}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
};

export default ProductData;
