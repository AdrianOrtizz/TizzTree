import { BlackLogo } from "../Logo/Logo";

const LogIn = ({
  setLogInVisible,
}: {
  setLogInVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <section
        className="w-full h-full absolute z-10 bg-black opacity-30"
        onClick={() => setLogInVisible(false)}
      ></section>

      <article className="p-4 h-1/2 w-3/4 bg-white absolute z-20 top-1/4 rounded-2xl text-black flex flex-col justify-between items-center">
        <BlackLogo />

        <div className="h-full m-5 flex flex-col justify-between">
          <form className="flex flex-col items-center">
            <div className="flex flex-col mb-12 w-full">
              <label className="font-semibold" htmlFor="user">
                Nombre de usuario o correo electrónico
              </label>
              <input
                name="user"
                className="my-2 border-b focus:outline-none"
                type="text"
              />
            </div>

            <div className="flex flex-col mb-6 w-full">
              <label className="font-semibold" htmlFor="password">
                Contraseña
              </label>
              <input
                name="password"
                className="my-2 border-b focus:outline-none"
                type="text"
              />
            </div>
            <button className="bg-lime-300 rounded-lg p-2">
              Iniciar sesión
            </button>
          </form>

          <div>
            <h3>¿No tenés una cuenta? ¡Registrate acá!</h3>
          </div>
        </div>
      </article>
    </>
  );
};

export default LogIn;
