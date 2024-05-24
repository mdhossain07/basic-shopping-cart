/* eslint-disable react/prop-types */
import productsData from "../data/productData";
import ProductData from "./ProductData";

const ProductTable = ({ handleCounter, count, handleProductDetails }) => {
  return (
    <div className="relative overflow-x-auto my-3">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {productsData?.map((product) => (
            <ProductData
              key={product?.id}
              product={product}
              onCounter={handleCounter}
              count={count}
              handleProductDetails={handleProductDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
