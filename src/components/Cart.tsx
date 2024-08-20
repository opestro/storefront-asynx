import { IconShoppingCartOff } from "@tabler/icons-react";
import "./cart.css";

import { OrderItem } from "feeef/src/core/core";
import React, { useEffect } from "react";

interface CartProps {
  active: boolean;
  setCartLength: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  cart: OrderItem[];
}

const Cart: React.FC<CartProps> = ({
  active,
  setCartLength,
  length,
  setActive,
  cart,
}) => {
  const [array, setArray] = React.useState<OrderItem[]>(cart);
  const removeFromCart = (index: number) => {
    array.splice(index, 1);
    setArray((prev) => prev.filter((_, i) => i !== index));
    setCartLength(array.length);
    localStorage.setItem("cart", JSON.stringify(array));
  };
  useEffect(() => {
    setArray(cart);
  }, [cart]);

  useEffect(() => {
    setArray(cart);
    setCartLength(array.length);
  }, [active, length, cart]);

  console.log("rendered");
  return (
    <div
      className={`fixed top-16 right-0 z-50  h-screen bg-white dark:bg-gray-800 border  shadow-2xl  overflow-scroll  transform transition-transform duration-300 ${
        active ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h1 className="text-2xl font-bold p-4">السلة</h1>
      <button
        onClick={() => setActive(false)}
        className="absolute top-0 left-0 p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <ul className="min-h-7">
        {array.length > 0 ? (
          array.map((item: any, index: number) => (
            <li key={index} className="">
              <div className="flex items-center justify-between bg-card px-4 py-3 rounded-md shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.media[0]}
                    alt="Product Image"
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-lg">
                        {item.product.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1">
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="p-1">
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="font-medium text-2xl">
                    {item.product.price} دج
                  </div>
                  <button onClick={() => removeFromCart(index)} className="p-1">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-6xl">
            السلة فارغة{" "}
            <IconShoppingCartOff size={400} stroke={0.5} className="text-p" />
          </li>
        )}
      </ul>
      <p className="p-4 text-2xl">
        المجموع :{" "}
        {array.reduce((acc: number, item: any) => acc + item.product.price, 0)}{" "}
        دج
      </p>
    </div>
  );
};

export default Cart;

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
