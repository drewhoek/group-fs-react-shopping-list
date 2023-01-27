export function ShoppingListForm({
  addItem,
  setNewItem,
  newItem,
  newQuan,
  setNewQuan,
  newUnit,
  setNewUnit,
  editMode,
  runEdit,
  setEditMode,
  currentID,
}) {
  console.log(currentID);
  function handleSave(e) {
    e.preventDefault();
    if (editMode) {
      runEdit(currentID);
      setEditMode(false);
      setNewItem("");
      setNewQuan("");
      setNewUnit("");
    } else {
      addItem();
    }
  }

  return (
    <>
      <div className="entry-form">
        <h2 className="add-h2">{editMode ? "Edit Item" : "Add Item"}</h2>
        <form onSubmit={handleSave}>
          <input
            type="text"
            placeholder="Item"
            value={newItem}
            required
            onChange={(evt) => setNewItem(evt.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newQuan}
            required
            onChange={(evt) => setNewQuan(evt.target.value)}
          />
          <input
            type="text"
            placeholder="Unit"
            required
            onChange={(evt) => setNewUnit(evt.target.value)}
            value={newUnit}
          />
          <button className="save-btn" type="submit">
            {editMode ? "Save Edit" : "Save"}
          </button>
          <button
            onClick={() => setEditMode(false)}
            className={editMode ? "list-btns" : "hide-btns"}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
