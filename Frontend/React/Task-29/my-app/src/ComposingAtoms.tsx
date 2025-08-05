import { atom, useAtom } from 'jotai';

const priceAtom = atom(100);
const quantityAtom = atom(2);

const totalAtom = atom((get) => get(priceAtom) * get(quantityAtom));

 function ComposingAtoms() {
  const [price, setPrice] = useAtom(priceAtom);
  const [quantity, setQuantity] = useAtom(quantityAtom);
  const [total] = useAtom(totalAtom);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px auto', textAlign: 'center' }}>
      <h2>Composing Atoms Example</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <div>
        <strong>Total = {total}</strong>
      </div>
    </div>
  );
}

export default ComposingAtoms;