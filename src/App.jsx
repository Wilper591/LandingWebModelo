import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div id="aboutme" className="bg-gray-500 m-16 mx-10 px-5 flex flex-col items-center">
        <h1 className="text-2xl font-black text-center my-5">Acerca de Mi</h1>
        <p className="text-md w-1/2 font-light text-justify my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          corrupti itaque repellendus officiis exercitationem, ex, in officia
          obcaecati, asperiores voluptatibus repudiandae doloribus ut laboriosam
          quibusdam ducimus distinctio labore. Voluptatum, ab. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nesciunt debitis saepe ducimus
          quod illo. Error ex voluptates, quam dolorem itaque expedita
          voluptatibus porro nisi accusantium dolor labore asperiores tenetur
          esse.
        </p>
      </div>
      <div
        id="servicios"
        className="bg-gray-300 mx-10 px-5 flex flex-col items-center rounded-lg py-4"
      >
        <h2 className="text-xl font-black text-center my-5">Servicios</h2>
        <h3 className="text-lg font-black text-justify my-2">Taroc</h3>
        <p className="text-md w-1/2 font-light text-justify my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quia quam
          repellendus ut odio pariatur amet eligendi quis, quasi provident sed
          maxime nihil nobis necessitatibus. Corrupti quis tenetur qui maiores!
        </p>
        <h3 className="text-lg font-black text-justify my-2">Psicoterapia</h3>
        <p className="text-md w-1/2 font-light text-justify my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          perferendis quidem odio error ipsum necessitatibus iste voluptate
          optio fugiat consectetur, cum, commodi eius veniam non dolorum
          explicabo ex, quibusdam quisquam?
        </p>
      </div>
      <div id="contacto" className="bg-gray-500 my-20 mx-10 px-5">
        <h2 className="text-lg font-black text-justify my-2">Contacto</h2>
        <p className="text-md w-1/2 font-light text-justify my-2">
          Whatsapp: <span>+54 99999999</span>
        </p>
        <p className="text-md w-1/2 font-light text-justify my-2">
          Correo: <span>correo@correo.com</span>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
