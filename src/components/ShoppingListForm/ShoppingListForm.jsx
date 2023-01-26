export function ShoppingListForm ({ addItem, setNewItem, newItem, newQuan, setNewQuan, newUnit, setNewUnit }) {

    function handleSave (e) {

        e.preventDefault();
        addItem();
    }

    return (
        <>
        <h2>Add Item</h2>
        <form onSubmit={handleSave}>
        <input type="text"
          placeholder="Item"
          value={newItem}
          onChange={(evt) => setNewItem(evt.target.value)}/>
        <input type="number"
         placeholder="Quantity"
         value={newQuan}
         onChange={(evt) => setNewQuan(evt.target.value)}/>
        <input type="text" placeholder="Unit"
           onChange={(evt) => setNewUnit(evt.target.value)}
           value={newUnit} />
        <button type="submit">Save</button>
        </form>
        </>
    )
}