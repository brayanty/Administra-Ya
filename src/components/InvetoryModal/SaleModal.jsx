import { useState } from "react";

function SaleModal({ isOpen, onClose, onSellItem, itemToSell }) {
  const [amount, setAmount] = useState("");

  const handleSell = () => {
    if (!amount || amount <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }

    const soldItem = { ...itemToSell, amount: parseFloat(amount) };
    onSellItem(soldItem);
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
        <h2 className="text-xl font-semibold mb-4">Vender Producto</h2>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Cantidad a Vender
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Cantidad"
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleSell}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Vender
        </button>
      </form>
    </div>
  );
}

export default SaleModal;
