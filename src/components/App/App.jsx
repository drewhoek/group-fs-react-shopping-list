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
  const [editMode, setEditMode] = useState(false);
  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    getList();
  }, []);

  function runEdit(itemID) {
    const newObj = {
      item: newItem,
      quantity: newQuan,
      unit: newUnit,
    };
    console.log(itemID);

    axios
      .put(`/list/editlist/${itemID}`, newObj)
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating");
        console.log(err);
      });
  }

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
    console.log("in removeAll");
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
    console.log("marking item purchased at id:", itemID);
    axios
      .put(`/list/${itemID}`)
      .then((response) => {
        console.log("successfully marked item as purchased");
        getList();
      })
      .catch((err) => {
        alert("Error in marking item purchased");
        console.log("error in marking item purchased", err);
      });
  };

  const markAllNotPurchased = () => {
    console.log("marking all items as not purchased");
    axios
      .put(`/list/`)
      .then((response) => {
        console.log("Successfully marked all items as not purchased");
        getList();
      })
      .catch((err) => {
        alert("Error in marking all items as not purchased");
        console.log("Error in marking all items as not purchased", err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <ShoppingListForm
            setNewItem={setNewItem}
            newItem={newItem}
            newQuan={newQuan}
            newUnit={newUnit}
            setNewQuan={setNewQuan}
            setNewUnit={setNewUnit}
            addItem={addItem}
            editMode={editMode}
            setEditMode={setEditMode}
            runEdit={runEdit}
            currentID={currentID}
          />
        </section>
        <section>
          <ShoppingList
            shoppingList={shoppingList}
            getList={getList}
            handleRemove={handleRemove}
            removeAll={removeAll}
            markPurchased={markPurchased}
            markAllNotPurchased={markAllNotPurchased}
            editMode={editMode}
            setEditMode={setEditMode}
            runEdit={runEdit}
            setCurrentID={setCurrentID}
          />
        </section>
      </main>
    </div>
  );
}
export default App;
