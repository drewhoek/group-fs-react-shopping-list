

export function ShoppingList ({shoppingList}) {

    return (
        <>
        <div className="header2">
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button>Clear</button>
        </div>
        <div className="list">
            {shoppingList.map((item) => (
                <div className="list-items">
                    <p className="item-name">{item.item}</p>
                    <p>Item Quantity: {item.quantity} {item.unit}</p>
                    <div className="list-btns">
                    <button>Buy</button>
                    <button>Remove</button>
                    </div>
                </div>
            )
            )}
        </div>
        </>
    )
}