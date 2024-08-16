import { useState, useEffect } from "react";

function InventoryModal({
  isOpen,
  onClose,
  onAddItem,
  itemToEdit,
  onEditItem,
}) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setProduct(itemToEdit.product);
      setPrice(itemToEdit.price.toString());
      setAmount(itemToEdit.amount.toString());
    } else {
      setProduct("");
      setPrice("");
      setAmount("");
    }
  }, [itemToEdit]);

  const formatNumber = (num) => {
    return num.toLocaleString("es-ES"); // Ajusta según tus necesidades
  };

  const handleSave = () => {
    const parsedPrice = parseFloat(price.replace(/\./g, ""));
    const parsedAmount = parseFloat(amount.replace(/\./g, ""));

    if (!product.trim() || isNaN(parsedPrice) || isNaN(parsedAmount)) {
      return;
    }

    const item = {
      product,
      price: parsedPrice,
      amount: parsedAmount,
    };

    if (itemToEdit) {
      onEditItem(item);
    } else {
      onAddItem(item);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <form
        onClick={(e) => e.preventDefault()}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">
          {itemToEdit ? "Editar Producto" : "Agregar Producto"}
        </h2>
        <label htmlFor="nameproduct">Nombre del producto</label>
        <input
          id="nameproduct"
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Nombre del producto"
          className="inline-block w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <label htmlFor="price">Precio</label>

        <input
          id="price"
          type="text"
          value={formatNumber(parseFloat(price) || 0)}
          onChange={(e) => setPrice(e.target.value.replace(/\./g, ""))}
          placeholder="Precio"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <label htmlFor="amount">Cantidad</label>
        <input
          id="amount"
          type="text"
          value={formatNumber(parseFloat(amount) || 0)}
          onChange={(e) => setAmount(e.target.value.replace(/\./g, ""))}
          placeholder="Cantidad"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleSave}
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {itemToEdit ? "Guardar Cambios" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

export default InventoryModal;
