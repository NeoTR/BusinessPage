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
  const [flavour, setFlavour] = useState(null);
  const [puff, setPuff] = useState(null);
  const [items, setItems] = useState([
    {
      id: 2800,
      flavours: ["Mango", "Strawberry", "Blueberry"],
      price: 10.99,
      stock: 5,
    },
    {
      id: 3000,
      flavours: ["Mango", "Strawberry", "Blueberry"],
      price: 15.99,
      stock: 3,
    },
    {
      id: 3500,
      flavours: ["Mango", "Strawberry", "Blueberry"],
      price: 20.99,
      stock: 7,
    },
  ]);

  const handleSearch = () => {
    let stock;
    if (!puff) {
      toast.error("Please select the amount of puffs!", {
        theme: "dark",
      });
      return;
    } else {
      stock = items.find((item) => item.id === parseInt(puff)).stock;

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

    const selectedPuffItem = items.find((item) => item.id === parseInt(puff));
    const selectedFlavourPrice = selectedPuffItem.price;
    setPrice(`$${selectedFlavourPrice}`);

    const updatedItems = items.map((item) => {
      if (item.id === parseInt(puff)) {
        return {
          ...item,
          stock: item.stock - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handlePuffChange = (event) => {
    const selectedPuff = event.target.value;
    setPuff(selectedPuff);
    const selectedPuffItem = items.find((item) => item.id === parseInt(selectedPuff));
    setFlavour(selectedPuffItem.flavours.includes(flavour) ? flavour : selectedPuffItem.flavours[0]);
  };

  const handleFlavourChange = (event) => {
    const selectedFlavour = event.target.value;
    setFlavour(selectedFlavour);
  };

  return (
    <>
      <ToastContainer />
      <section id="renter" className="pt-10 z-10">
        <div className="container w-screen flex items-center justify-center">
          <div className="md:w-7/8 mx-auto bg-[#242424] rounded-[15px] py-5 flex flex-col md:flex-row md:space-x-20 justify-center md:items-center md:w-screen">
            <div>
              <label>Puffs:</label>
              <select id="puffs" value={puff} onChange={handlePuffChange}>
                <option value="">Select Puffs</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Flavour:</label>
              <select id="flavour" value={flavour} onChange={handleFlavourChange}>
                <option value="">Select Flavour</option>
                {puff &&
                  items
                    .find((item) => item.id === parseInt(puff))
                    .flavours.map((flavour) => (
                      <option key={flavour} value={flavour}>
                        {flavour}
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
