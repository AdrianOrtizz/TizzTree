import { useState } from "react";

import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";

import { WhiteLogo } from "../Logo/Logo";

const Nav = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [logInVisible, setLogInVisible] = useState(false);

  return (
    <>
      <nav className="fixed flex flex-row justify-between w-9/10 mt-4 ">
        <WhiteLogo />

        <div className="flex">
          <button
            className="funnel-sans-regular cursor-pointer"
            onClick={() => setLogInVisible(true)}
          >
            Iniciar sesión
          </button>
          <button
            className="bg-emerald-950 hover:bg-emerald-900 transition w-40 ml-3 rounded-full funnel-sans-regular cursor-pointer"
            onClick={() => setSignUpVisible(true)}
          >
            Registrarse gratis
          </button>
        </div>
      </nav>

      {signUpVisible && <SignUp setSignUpVisible={setSignUpVisible} />}
      {logInVisible && <LogIn setLogInVisible={setLogInVisible} />}
    </>
  );
};

export default Nav;
