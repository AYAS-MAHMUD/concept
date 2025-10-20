import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export default function Login({ onSubmit }) {
  const location = useLocation();
  // console.log(location)
  const Navigate = useNavigate();
  const {signInUser} = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    console.log(email,password)
    signInUser(email,password)
    .then((result) => {
        console.log(result.user);
        alert("Login Successfully")
        // ev.target.reset();
        Navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });





    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      // call optional onSubmit prop, otherwise just simulate
      if (onSubmit) await onSubmit({ email, password });
      else await new Promise((r) => setTimeout(r, 700));
      // success handling can be done in parent
    } catch (err) {
      setErrors({ form: err.message || "Failed to login" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800">Login your account</h2>
        <hr className="my-6 border-gray-200" />

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-xs text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          {errors.form && <p className="text-sm text-red-600 mb-3">{errors.form}</p>}

          <button
           
            type="submit"
            className="w-full py-3 rounded-md bg-gray-800 text-white font-medium shadow-sm hover:opacity-95 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't Have An Account ? <Link to="/auth/register" className="text-red-500 font-medium">Register</Link>
        </p>
      </div>
    </div>
  );
}
