export function openModalAdd(item, setItemToEdit, setisModalAddOpen) {
  setItemToEdit(item);
  setisModalAddOpen(true);
}

export function closeModal(setItemToEdit, setisModalAddOpen) {
  setItemToEdit(null);
  setisModalAddOpen(false);
}
