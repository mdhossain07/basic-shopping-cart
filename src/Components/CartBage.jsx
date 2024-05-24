import { useState } from "react";
import DialogModal from "./DialogModal";

/* eslint-disable react/prop-types */
const CartBage = ({
  count,
  productCart,
  quantity,
  setCount,
  setProductCart,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-2 -end-2 ">
          {count}
        </div>
      </button>

      <DialogModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        productCart={productCart}
        setProductCart={setProductCart}
        setCount={setCount}
        quantity={quantity}
      />
    </>
  );
};

export default CartBage;
