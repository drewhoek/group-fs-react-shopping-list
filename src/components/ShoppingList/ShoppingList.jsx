

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
                    <p>{item.item}</p>
                    <button>Buy</button>
                    <button>Remove</button>
                </div>
            )
            )}
        </div>
        </>
    )
}