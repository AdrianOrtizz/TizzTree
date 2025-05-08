import { useEffect } from "react";
import useApiStore from "../../../store/apiStore";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { actualUser } = useApiStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (actualUser === null) navigate("/");
  }, []);

  return (
    <>
      <h2>¡Te damos la bienvenida, {actualUser?.username}!</h2>

      <div>
        <label htmlFor="name">¿Cómo te llamas?</label>
        <input type="text" />
      </div>
    </>
  );
};

export default Edit;
