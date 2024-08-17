import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import InventoryModal from "./components/Invetory";

function App() {
  // Inicializar el tema desde localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Aplicar la clase correspondiente al documento
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // Guardar el tema en localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

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
      <Navbar
        nameLogo="Administra Ya!!"
        items={itemsNavbar}
        isSelectModeDark={theme}
        onDarkMode={changeTheme}
      />
      <InventoryModal />
    </>
  );
}

export default App;
