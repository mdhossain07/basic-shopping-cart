/* eslint-disable react/prop-types */
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const DialogModal = ({
  isOpen,
  setIsOpen,
  productCart,
  setProductCart,
  setCount,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Product Details</DialogTitle>

            {productCart?.length === 0 ? (
              <p>Cart is Empty</p>
            ) : (
              <>
                {productCart?.map((item, index) => (
                  <div className="py-2" key={index}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <Description>Name: {item?.name}</Description>
                        <Description>Price: {item?.price} </Description>
                      </div>
                      <div>Quantity: {item?.quantity}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="flex gap-4">
              <button
                className="bg-yellow-500 rounded-md text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>

              <button
                className="bg-red-500 rounded-md text-white p-2"
                onClick={() => {
                  setProductCart([]);
                  setCount(0);
                }}
              >
                Clear Cart
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DialogModal;
