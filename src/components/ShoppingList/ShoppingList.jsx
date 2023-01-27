export function ShoppingList({
  shoppingList,
  handleRemove,
  removeAll,
  markPurchased,
  markAllNotPurchased,
  editButton,
}) {
  return (
    <>
      <div className="header2-container">
        <div className="header2">
          <h2>Shopping List</h2>
          <button
            onClick={() => {
              if (
                confirm("Are you sure you want to reset the shopping list?")
              ) {
                markAllNotPurchased();
              }
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              if (
                confirm("Are you sure you want to clear the shopping list?")
              ) {
                removeAll();
              }
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="list">
        {shoppingList.map((val) => {
          return (
            <div key={val.id} className="list-items">
              <p className="item-name">{val.item}</p>
              <p className="item-attr">
                <span className="item-quan">{val.quantity}</span>
                <span className="item-unit">{val.unit}</span>
              </p>
              {val.is_purchased && <p className="purchase-txt">Purchased</p>}
              <div className={val.is_purchased ? "hide-btns" : "list-btns"}>
                <button onClick={() => markPurchased(val.id)}>Buy</button>
                <button onClick={() => handleRemove(val.id)}>Remove</button>
                <button onClick={() => editButton(val.id)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
