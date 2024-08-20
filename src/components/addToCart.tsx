
import React from "react";

interface Item {
  // Define your order properties here
}

const AddToCart: React.FC<{ item: Item }> = ({ item }) => {
  const handleAddToCart = () => {
    if (!item) {
      window.alert("Please select a product before adding to cart.");
      return;
    }
    // Set the order in local storage to an array of items
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Order added to cart", cart);
  };

  return (
    <button
      className="bg-p  text-white font-bold py-2 px-4 rounded  m-4"
      onClick={handleAddToCart}
    >
      اضافة الى السلة
    </button>
  );
};

export default AddToCart;
