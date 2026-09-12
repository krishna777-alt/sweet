import { useEffect, useState } from "react";
import { ClientContext } from "./ClientContext";

function ClientProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  function handleAddToCart(food) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === food.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }
      return [...currentCart, food];
    });
  }
  // useEffect(() => {
  //   console.log("Cart:", cart);
  // }, [cart]);
  useEffect(function () {
    async function fetchFoodData() {
      try {
        const res = await fetch(`http://127.0.0.1:8080/api/foods`);
        const data = await res.json();

        console.log(data);
        setFoods(data);
      } catch (err) {
        console.error(`Error:${err}`);
      }
    }
    fetchFoodData();
  }, []);
  return (
    <ClientContext.Provider value={{ foods, setFoods, cart, handleAddToCart }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
