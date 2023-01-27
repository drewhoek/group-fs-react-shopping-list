import { useState } from "react";

export function ShoppingList({ shoppingList, handleRemove, removeAll, markPurchased, markAllNotPurchased }) {
  const [buttonClass, setButtonClass] = useState("list-btns");
  const [purchasedText, setPurchasedText] = useState("");

  return (
    <>
      <div className="header2">
        <h2>Shopping List</h2>
        <button onClick={() => markAllNotPurchased()}>Reset</button>
        <button onClick={() => removeAll()}>Clear</button>
      </div>
      <div className="list">
          return (
            <div key={val.id} className="list-items">
              <p className="item-name">{val.item}</p>
              <p className="item-attr">
                <span className="item-quan">{val.quantity}</span>
                <span className="item-unit">{val.unit}</span>
              </p>
              {val.is_purchased && <p>Purchased</p>}
              <div className={val.is_purchased ? "hide-btns" : "list-btns"}>
                <button onClick={() => markPurchased(val.id)}>Buy</button>
                <button onClick={() => handleRemove(val.id)}>Remove</button>
              </div>
            </div>
          );
        {shoppingList.map((val) => (
          <div key={val.id} className="list-items">
            <p className="item-name">{val.item}</p>
            <p className="item-attr">
              <span className="item-quan">{val.quantity}</span>
              <span className="item-unit">{val.unit}</span>
            </p>
            <p>{purchasedText}</p>
              <button onClick={() => markPurchased(val.id)}>Buy</button>
              <button onClick={() => handleRemove(val.id)}>Remove</button>
            </div>
        ))}
      </div>
    </>
  );
}
