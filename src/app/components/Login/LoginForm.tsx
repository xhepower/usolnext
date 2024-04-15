"use client";
import { redirigir } from "app/app/actions";
//import { handleLogin } from "app/app/actions";
import { urls } from "app/app/services/urls";
import { guardarToken } from "app/app/utils/token";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginProps } from "../../../../types";
const login = async ({ email, password }: loginProps) => {
  const response = await fetch(urls.auth.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  const accesToken = data.acces_token;
  if (typeof accesToken == "string") return accesToken;
  return null;
};
// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(1),
});
export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password }: loginProps) => {
      //esta funcion dice que si no me devuleve un accestoken pues que mande error alert

      const aja = await login({ email, password });
      if (!aja) {
        alert("Error...Revise email o contraseña o su conexion a internet.");
      } else {
        //aqui va guardar el token
        guardarToken(aja);
        redirigir("/");
      }
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit} method="POST" className="form form-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        id="email"
        className="input input-login"
      />
      {errors.email && touched.email && <span>{errors.email}</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        id="password"
        className="input input-login"
      />
      {errors.password && touched.password && <span>{errors.password}</span>}

      <button type="submit" className="button button-primary button-login">
        Ingresar
      </button>
    </form>
  );
}
