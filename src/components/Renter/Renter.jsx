import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Renter = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      toast.success("The stock has been resetted!", {
        theme: "dark",
      });
      setItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          stock: 10,
        }))
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [pizza, setPizza] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Buffalo",
      sizes: ["Small", "Medium", "Large"],
      prices: { Small: 10.99, Medium: 14.99, Large: 18.99 },
      stock: 5,
    },
    {
      id: 2,
      name: "Hawaiian",
      sizes: ["Small", "Medium", "Large"],
      prices: { Small: 12.99, Medium: 16.99, Large: 20.99 },
      stock: 3,
    },
    {
      id: 3,
      name: "BBQ Chicken",
      sizes: ["Small", "Medium", "Large"],
      prices: { Small: 14.99, Medium: 18.99, Large: 22.99 },
      stock: 7,
    },
  ]);
  const handleSearch = () => {
    let stock;
    if (!pizza) {
      toast.error("Please select the pizza!", {
        theme: "dark",
      });
      return;
    } else if (!size) {
      toast.error("Please select a size!", {
        theme: "dark",
      });
      return;
    } else {
      stock = items.find((item) => item.id === parseInt(pizza)).stock;

      if (stock === 0) {
        toast.error("The product is out of stock!", {
          theme: "dark",
        });
        return;
      }
      toast.success(`You have bought the product! There are ${stock - 1} left!`, {
        theme: "dark",
      });
    }

    const selectedPizzaItem = items.find((item) => item.id === parseInt(pizza));
    const selectedSizePrice = selectedPizzaItem.prices[size];
    setPrice(`$${selectedSizePrice}`);

    const updatedItems = items.map((item) => {
      if (item.id === parseInt(pizza)) {
        return {
          ...item,
          stock: item.stock - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);

    setPrice(null);
  };

  const handlePizzaChange = (event) => {
    const selectedPizza = event.target.value;
    setPizza(selectedPizza);
    const selectedPizzaItem = items.find((item) => item.name === parseInt(selectedPizza));
    setSize(selectedPizzaItem.sizes.includes(size) ? size : selectedPizzaItem.sizes[0]);
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);

    const selectedPizzaItem = items.find((item) => item.id === parseInt(pizza));
    const selectedSizePrice = selectedPizzaItem.prices[selectedSize];
    setPrice(`$${selectedSizePrice}`);
  };

  return (
    <>
      <ToastContainer />
      <section id="renter" className="pt-10 z-10">
        <div className="container w-screen flex items-center justify-center">
          <div className="md:w-7/8 mx-auto bg-[#242424] rounded-[15px] py-5 flex flex-col md:flex-row md:space-x-20 justify-center md:items-center md:w-screen">
            <div>
              <label>Pizza:</label>
              <select id="pizza" value={pizza} onChange={handlePizzaChange}>
                <option value="">Select a Pizza</option>
                {items.map((item) => (
                  <option key={item.name} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Size:</label>
              <select id="size" value={size} onChange={handleSizeChange}>
                <option value="">Select Size</option>
                {pizza &&
                  items
                    .find((item) => item.id === parseInt(pizza))
                    .sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
              </select>
            </div>
            <div className="text-gray-400">
              <label className="text-white">Price:</label>
              {price}
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 transition-all md:mt-0 mt-4" onClick={handleSearch}>
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Renter;
