function AlertEvents({ isModalAlertEvents, setIsAlertEvents, title, msj }) {
  if (!isModalAlertEvents) return null;

  return (
    <div className="transition-all fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="rounded-md text-white bg-slate-900 flex flex-col items-center justify-around p-2 h-[40vh] gap-1">
        <div className="font-semibold text-2xl font-poppins">Alerta!!</div>
        <p className="text-center text-lg text-wrap">
          La cantidad es mayor, a la cantidad de productos.
          <br />
          Por favor seleccione un valor valido!!
        </p>
        <button
          type="button"
          onClick={() => setIsAlertEvents(false)}
          className="p-2 transition-colors bg-red-700 text-white hover:bg-red-500 rounded-md"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertEvents;
