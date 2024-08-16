import { useState } from "react";
import Navbar from "./components/Navbar";
import InventoryModal from "./components/InvetoryModal";
function App() {
  const [count, setCount] = useState(0);

  const itemsNavbar = [
    {
      name: "Conocer más",
      href: "https://www.zetflix.tech",
    },
    {
      name: "Soporte",
      href: "https://www.instagram.com/brayan_tech22/",
    },
  ];

  return (
    <>
      <Navbar nameLogo="Administra Ya!!" items={itemsNavbar} />
      <InventoryModal />
    </>
  );
}

export default App;
