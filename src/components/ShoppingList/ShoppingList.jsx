

export function ShoppingList ({shoppingList, handleRemove, removeAll}) {

    return (
        <>
        <div className="header2">
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button onClick={() => removeAll()}>Clear</button>
        </div>
        <div className="list">
            {shoppingList.map((val) => (
                <div key={val.id} className="list-items">
                    <p className="item-name">{val.item}</p>
                    <p>Item Quantity: {val.quantity} {val.unit}</p>
                    <div className="list-btns">
                    <button>Buy</button>
                    <button onClick={() => handleRemove(val.id)}>Remove</button>
                    </div>
                </div>
            )
            )}
        </div>
        </>
    )
}