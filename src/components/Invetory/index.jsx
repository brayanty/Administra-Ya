import "./index.css";
import { useState, useEffect } from "react";
import InventoryModal from "./InventoryModal.jsx";
import SaleModal from "./SaleModal.jsx";
import AlertEvents from "../alertEvents/index.jsx";
import { save, load } from "../logic/saveLoad.js";

function Inventory() {
  // Estado para almacenar la lista de productos
  const [items, setItems] = useState([]);

  // Estado para manejar la visibilidad del modal de agregar/editar productos
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);

  // Estado para manejar la visibilidad del modal de ventas
  const [isModalSaleOpen, setIsModalSaleOpen] = useState(false);

  // Estado para el producto que se está editando
  const [itemToEdit, setItemToEdit] = useState(null);

  // Estado para el producto que se está vendiendo
  const [itemToSell, setItemToSell] = useState(null);

  // Estado para el total acumulado de ventas
  const [totalSales, setTotalSales] = useState(0);

  // Estado para el modal alertEvents
  const [isModalAlertEvents, setIsAlertEvents] = useState(false);

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    // Cargar los productos y el total de ventas desde el almacenamiento
    const totalSale = load("totalsale");
    const loadedItems = load("products");

    // Si hay productos cargados, actualizar el estado
    if (loadedItems) {
      setItems(loadedItems);
    }

    // Si hay un total de ventas cargado, actualizar el estado
    if (totalSale) {
      setTotalSales(totalSale);
    }
  }, []);

  // Función para abrir el modal de agregar/editar productos
  const openModalAdd = (item) => {
    setItemToEdit(item);
    setIsModalAddOpen(true);
  };

  // Función para cerrar todos los modales
  const closeModal = () => {
    setItemToEdit(null);
    setItemToSell(null);
    setIsModalAddOpen(false);
    setIsModalSaleOpen(false);
  };

  // Función para agregar un nuevo producto
  const handleAddItem = (item) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      save("products", updatedItems); // Guardar los productos actualizados
      return updatedItems;
    });
  };

  // Función para editar un producto existente
  const handleEditItem = (editedItem) => {
    const updatedItems = items.map((item) =>
      item.product === itemToEdit.product ? editedItem : item
    );
    setItems(updatedItems);
    save("products", updatedItems); // Guardar los productos actualizados
  };

  // Función para eliminar un producto del inventario
  const handleRemoveItem = (index) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este Producto?")
    ) {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      save("products", updatedItems); // Guardar los productos actualizados
    }
  };

  // Función para manejar la venta de un producto
  const handleSellItem = (soldItem) => {
    // Cantidad vendida
    const amountSold = soldItem.amount;

    // Precio del producto basado en el producto que se está vendiendo
    const itemPrice =
      items.find((item) => item.product === itemToSell.product)?.price || 0;

    // Monto total de la venta
    const saleAmount = amountSold * itemPrice;

    // Actualizar la cantidad del producto en el inventario
    const updatedItems = items.map((item) =>
      item.product === itemToSell.product
        ? { ...item, amount: item.amount - soldItem.amount }
        : item
    );
    // .filter((item) => item.amount > 0); // Filtra productos con cantidad <= 0

    // Actualizar el estado del inventario
    setItems(updatedItems);
    save("products", updatedItems); // Guardar los productos actualizados

    // Actualizar el total de ventas
    setTotalSales((prevTotal) => {
      const newTotal = prevTotal + saleAmount;
      save("totalsale", newTotal); // Guardar el total de ventas actualizado
      return newTotal;
    });
  };

  // Función para renderizar cada producto en la interfaz
  const renderItems = (item, index) => (
    <div
      key={index}
      className="bg-gray-200 max-h-80  p-4 border m-1 border-gray-200 rounded-lg shadow-sm flex flex-row max-md:flex-col max-md:flex justify-between"
    >
      <div>
        <h5
          className={`${
            item.product.length >= 15 ? "text-2xl overflow-hidden" : "text-3xl"
          } font-semibold text-gray-800 mb-2 text-wrap `}
        >
          {item.product}
        </h5>
        <div className="text-gray-700 font-bold">
          Precio: ${item.price.toLocaleString("es-ES")}
        </div>
        <div className="text-gray-600 font-bold mb-3">
          Cantidad: {item.amount.toLocaleString("es-ES")}
        </div>
        <div className="text-gray-600 font-bold">
          Ganancias: ${(item.amount * item.price).toLocaleString("es-ES")}
        </div>
      </div>
      <div className="flex flex-row gap-2 max-md:justify-center md:justify-end items-center">
        <button
          aria-label="button"
          onClick={() => handleRemoveItem(index)}
          className="text-lg font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Eliminar
        </button>
        <button
          aria-label="button"
          onClick={() => openModalAdd(item)}
          className="text-lg font-bold focus:outline-none text-white  bg-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Editar
        </button>
        <button
          aria-label="button"
          onClick={() => {
            setItemToSell(item);
            setIsModalSaleOpen(true);
          }}
          className="text-lg font-bold focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Vender
        </button>
      </div>
    </div>
  );

  return (
    <section className="p-6 dark:bg-slate-800">
      <h4 className="text-4xl font-semibold text-slate-950 dark:text-white mb-1">
        Inventario
      </h4>
      <div className="flex gap-2 justify-end mb-2">
        <button
          onClick={() => openModalAdd(null)}
          className="bg-transparent transition-all hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Agregar Inventario
        </button>
      </div>
      <div className="mb-4 text-lg font-semibold dark:text-white">
        Total de Ventas: ${totalSales.toLocaleString("es-ES")}
      </div>
      <div
        className={`${
          items == [] || items.length <= 3 ? "h-[93vh]" : ""
        } grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 border border-black dark:border-white mt-2 mb-2`}
      >
        {items.length === 0 ? (
          <h3 className="text-center m-4 dark:text-white">
            Agrega elementos en el Inventario
          </h3>
        ) : (
          items.map((item, index) => renderItems(item, index))
        )}
      </div>
      <InventoryModal
        isOpen={isModalAddOpen}
        onClose={closeModal}
        onAddItem={handleAddItem}
        itemToEdit={itemToEdit}
        onEditItem={handleEditItem}
      />
      <SaleModal
        isOpen={isModalSaleOpen}
        onClose={closeModal}
        onSellItem={handleSellItem}
        itemToSell={itemToSell}
        setIsAlertEvents={setIsAlertEvents}
      />
      <AlertEvents
        isModalAlertEvents={isModalAlertEvents}
        setIsAlertEvents={setIsAlertEvents}
      />
    </section>
  );
}

export default Inventory;
