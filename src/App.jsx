import { useState } from "react";
import "./App.css";
import CartBage from "./Components/CartBage";
import ProductTable from "./Components/ProductTable";

function App() {
  const [count, setCount] = useState(0);
  const [productCart, setProductCart] = useState([]);

  const handleProductDetails = (product) => {
    const existingProduct = productCart?.find(
      (item) => item?.id === product?.id
    );

    if (existingProduct) {
      setProductCart(
        productCart?.map((item) =>
          item?.id === product?.id
            ? { ...item, quantity: product?.quantity }
            : item
        )
      );
    } else {
      setProductCart([...productCart, product]);
    }
  };

  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-semibold text-center my-3 font-semibold">Laptops</h2>
      <div className="flex justify-end">
        <CartBage
          count={count}
          productCart={productCart}
          setCount={setCount}
          setProductCart={setProductCart}
        />
      </div>
      <ProductTable
        handleCounter={setCount}
        count={count}
        handleProductDetails={handleProductDetails}
      />
    </div>
  );
}

export default App;
