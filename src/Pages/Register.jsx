import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export default function Register({ onSubmit }) {
  const {createUser,setUser,updatedUser} = use(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(name,email,password)
  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (photo && !/^https?:\/\/.+/.test(photo)) e.photo = "Enter a valid URL";
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    if (!accepted) e.accepted = "You must accept terms and conditions";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value
    const photourl = ev.target.photourl.value
    const password = ev.target.password.value
    // console.log(name,email,password)
    createUser(email,password)
    .then((result)=>{
      // console.log(result.user)
      updatedUser({displayName : name,photoURL : photourl})
      .then(()=>{
        setUser({...result.user,displayName : name,photoURL : photourl})
        navigate('/')
      })
      .catch(error=>{
            console.log(error)
            setUser(result.user)
        })
    })
    .catch(error=>{
            console.log(error)
        })


    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      const payload = { name, photo, email, password };
      if (onSubmit) await onSubmit(payload);
      else await new Promise((r) => setTimeout(r, 800));
    } catch (err) {
      setErrors({ form: err.message || "Registration failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800">Register your account</h2>
        <hr className="my-6 border-gray-200" />

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              value={photo}
              name="photourl"
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter a photo URL"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.photo ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.photo && <p className="mt-1 text-xs text-red-600">{errors.photo}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
          </div>

          <div className="mb-4 flex items-start">
            <input
              id="terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Accept <span className="font-medium">Term & Conditions</span>
            </label>
          </div>
          {errors.accepted && <p className="mt-1 text-xs text-red-600 mb-2">{errors.accepted}</p>}

          {errors.form && <p className="text-sm text-red-600 mb-3">{errors.form}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-gray-800 text-white font-medium shadow-sm hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-center text-sm text-gray-600 mt-5">
          Already Have An Account ? <Link to="/auth/login" className="text-red-500 font-medium">Login</Link>
        </p>
        </form>
      </div>
    </div>
  );
}
