"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
interface userListInf {
  setCreandoUser: Function;
}
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(1),
  role: Yup.string().required(),
});
function AddUser(props: userListInf) {
  const { setCreandoUser } = props;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "cobrador",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password, role }) => {},
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <div>
        <h3 className="titulo-form">Agregando un usuario.</h3>
        <button
          className="boton-nav  boton-salir"
          onClick={async () => {
            setCreandoUser(false);
          }}
        >
          X
        </button>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="app-form ">
        <label htmlFor="email" className="app-form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="app-form-input"
          value={values.email}
          onChange={handleChange}
          id="email"
        />
        {errors.email && touched.email && <span>{errors.email}</span>}

        <label htmlFor="password" className="app-form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="app-form-input"
          value={values.password}
          onChange={handleChange}
          id="password"
        />
        {errors.password && touched.password && <span>{errors.password}</span>}

        <label htmlFor="role" className="app-form-label">
          Elija un rol
        </label>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={handleChange}
          className="app-form-input"
        >
          <option value="admin">Admin</option>
          <option value="cobrador">Cobrador</option>
        </select>
        {errors.role && touched.role && <span>{errors.role}</span>}
        <button type="submit" className="btn-primary">
          Guardar usuario
        </button>
      </form>
    </>
  );
}

export default AddUser;
