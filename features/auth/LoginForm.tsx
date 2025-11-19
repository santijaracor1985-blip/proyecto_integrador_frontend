"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 p-6">

      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/30">

        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
          Registrate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          
          <div>
            <label className="text-white font-semibold block mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
            />
          </div>

          
          <div>
            <label className="text-white font-semibold block mb-1">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl shadow-lg hover:bg-blue-100 transition"
          >
            Iniciar Sesión
          </button>

        </form>

      </div>
    </div>
  );
}


