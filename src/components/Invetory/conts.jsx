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

export {
  items,
  setItems,
  isModalAddOpen,
  setIsModalAddOpen,
  isModalSaleOpen,
  setIsModalSaleOpen,
  itemToEdit,
  setItemToEdit,
  itemToSell,
  setItemToSell,
  totalSales,
  setTotalSales,
  isModalAlertEvents,
  setIsAlertEvents,
};
