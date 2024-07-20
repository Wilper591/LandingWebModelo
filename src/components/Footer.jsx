const Footer = () => {
  return (
    <footer>
      <nav className="from-gray-950 to-gray-700 bg-gradient-to-r py-5">
        <div className="flex justify-center px-10 gap-4 text-lg">
          <a
            to="#inicio"
            className="font-bold uppercase text-white hover:text-gray-500"
          >
            Inicio
          </a>
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
    </footer>
  );
};

export default Footer;
