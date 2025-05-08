import useApiStore from "../../store/apiStore";
import { useFormik } from "formik";
import { validateSignUp } from "../../helpers/validation";

const Form = () => {
  const { createUser, createUserLoading } = useApiStore();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: validateSignUp,
    onSubmit: async (values) => {
      await createUser(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
      <div className="flex flex-col mb-12 w-full">
        <label className="font-semibold" htmlFor="username">
          Nombre de usuario
        </label>
        <input
          id="username"
          className="my-2 w-58 border-b focus:outline-none"
          type="text"
          disabled={createUserLoading}
          {...formik.getFieldProps("username")}
        />
        {formik.errors.username && formik.touched.username && (
          <h3 className="text-red-700 w-58">{formik.errors.username}</h3>
        )}
      </div>

      <div className="flex flex-col mb-12 w-full">
        <label className="font-semibold" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          className="my-2 w-58 border-b focus:outline-none"
          type="text"
          disabled={createUserLoading}
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && (
          <h3 className="text-red-700 w-58">{formik.errors.email}</h3>
        )}
      </div>

      <div className="flex flex-col mb-6 w-full">
        <label className="font-semibold" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          className="my-2 w-58 border-b focus:outline-none"
          type="password"
          disabled={createUserLoading}
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && (
          <h3 className="text-red-700 w-58">{formik.errors.password}</h3>
        )}
      </div>
      <button
        type="submit"
        className="bg-lime-300 rounded-lg p-2 cursor-pointer"
      >
        Registrarse
      </button>
    </form>
  );
};

export default Form;
