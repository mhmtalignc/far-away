function Item({ prop, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={prop.packed}
        onChange={() => onToggleItem(prop.id)}
      />
      <span style={prop.packed ? { textDecoration: "line-through" } : {}}>
        {prop.quantity} {prop.description}
      </span>
      <button onClick={() => onDeleteItem(prop.id)}>❌</button>
    </li>
  );
}
export default Item;
