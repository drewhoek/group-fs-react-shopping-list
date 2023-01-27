import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import { ShoppingList } from "../ShoppingList/ShoppingList.jsx";
import { ShoppingListForm } from "../ShoppingListForm/ShoppingListForm.jsx";
import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newQuan, setNewQuan] = useState("");
  const [newUnit, setNewUnit] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get("/list/")
      .then((response) => {
        setShoppingList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        alert("There was an error getting shopping list", err);
      });
  };

  const addItem = () => {
    const newObj = {
      item: newItem,
      quantity: newQuan,
      unit: newUnit,
    };

    axios
      .post("/list/", newObj)
      .then((response) => {
        setNewItem("");
        setNewQuan("");
        setNewUnit("");
        getList();
      })
      .catch((err) => {
        alert("Error in adding item", err);
      });
  };

  const handleRemove = (itemID) => {
    console.log("deleting item at id:", itemID);

    axios
      .delete(`/list/${itemID}`)
      .then((response) => {
        console.log("deleted item successfully");
        getList();
      })
      .catch((err) => {
        alert("Error in deleting item");
        console.log("error in deleting item", err);
      });
  };

  const removeAll = () => {
    console.log('in removeAll');
    axios
      .delete(`/list/`)
      .then((response) => {
        console.log("deleted all items successfully");
        getList();
      })
      .catch((err) => {
        alert("Error in deleting items");
        console.log("error in deleting items", err);
      });
  };

  const markPurchased = (itemID) => {
    console.log('marking item purchased at id:', itemID);
    axios
      .put(`/list/${itemID}`)
      .then((response) => {
        console.log('successfully marked item as purchased')
        getList();
      }).catch((err) => {
        alert("Error in marking item purchased");
        console.log("error in marking item purchased", err);
      })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section className="entry-form">
          <ShoppingListForm
            setNewItem={setNewItem}
            newItem={newItem}
            newQuan={newQuan}
            newUnit={newUnit}
            setNewQuan={setNewQuan}
            setNewUnit={setNewUnit}
            addItem={addItem}
          />
        </section>
        <section>
          <ShoppingList
            shoppingList={shoppingList}
            getList={getList}
            handleRemove={handleRemove}
            removeAll={removeAll}
            markPurchased={markPurchased}
          />
        </section>
      </main>
    </div>
  );
}
export default App;
