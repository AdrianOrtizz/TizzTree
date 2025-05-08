import { BlackLogo } from "../Logo/Logo";
import Form from "./Form";

import useApiStore from "../../store/apiStore";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = ({
  setSignUpVisible,
}: {
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { createUserLoading, createUserError, createUserSuccess, resetApi } =
    useApiStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (createUserSuccess) setTimeout(() => navigate("/accounts/edit"), 2000);
    return resetApi();
  }, [createUserSuccess]);

  return (
    <>
      <section
        className="w-full h-full absolute z-10 bg-black opacity-30"
        onClick={() => setSignUpVisible(false)}
      ></section>

      <article className="p-4 h-3/4 w-3/4 bg-white absolute z-20 top-1/8 rounded-2xl text-black flex flex-col justify-between items-center">
        <BlackLogo />

        <div className="h-full m-5 mt-20 flex flex-col justify-between">
          <Form />

          {createUserLoading && <h2>CARGANDO</h2>}
          {createUserError && <h2 className="my-4 w-58">{createUserError}</h2>}
          {createUserSuccess && <h2>¡Usuario creado correctamente!</h2>}

          <div>
            <h3>¿Ya tenés cuenta? ¡Inicia sesión!</h3>
          </div>
        </div>
      </article>
    </>
  );
};

export default SignUp;
