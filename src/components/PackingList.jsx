import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [shortBy, setShortBy] = useState("input");
  let sortedItems;
  if (shortBy === "input") sortedItems = items; //input'a göre sıralama

  if (shortBy === "description")
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    ); //description

  if (shortBy === "packed")
    sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            prop={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={shortBy} onChange={(e) => setShortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        {items.length > 1 && <button onClick={onClearList}>Clear List</button>}
      </div>
    </div>
  );
}
export default PackingList;
