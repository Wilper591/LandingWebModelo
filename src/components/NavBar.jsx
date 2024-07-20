import { useState, useEffect } from "react";

const NavBar = () => {
  const [mostrar, setMostrar] = useState(false);
  const [marginTop, setMarginTop] = useState("mt-24");

  const handleClick = () => {
    setMostrar(!mostrar);
  };

  useEffect(() => {
    if (mostrar) {
      setMarginTop("mt-44");
    } else {
      setTimeout(() => {
        setMarginTop("mt-24");
      }, 500);
    }
  }, [mostrar]);

  return (
    <>
      <header
        className={`transition-all md:transition-none duration-500 md:mt-20 ${marginTop}`}
      >
        <nav className="flex flex-col md:flex-row md:justify-between px-10 from-gray-950 to-gray-700 bg-gradient-to-r pt-5 md:py-5 w-full fixed top-0">
          <div className="flex justify-between items-center">
            <div className="text-xl text-center mb-2">
              <a className="font-bold text-white hover:cursor-pointer hover:text-gray-500" to="/">
                Luisa Rodriguez
              </a>
            </div>
            <div className="block md:hidden ">
              <button className="flex items-center" onClick={handleClick}>
                <i className="fa-solid fa-bars font-bold text-3xl text-white px-3 py-2 border-2 rounded-md hover:border-gray-500 hover:text-gray-500"></i>
              </button>
            </div>
          </div>
          <div className="hidden md:flex text-center gap-3 text-lg">
            <a
              to="#servicios"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Servicios
            </a>
            <a
              to="#contacto"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Contacto
            </a>
          </div>

          <div
            className={`transition-all delay-200 duration-500 ease-in-out md:hidden flex flex-col text-start pb-5 gap-3 text-lg ${
              mostrar
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <a
              to="#servicios"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Servicios
            </a>
            <a
              to="#contacto"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
