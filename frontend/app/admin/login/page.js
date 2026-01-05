"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPanel from "./page"; // your actual admin panel component

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const PASSWORD = "Lorenze24@"; // hard-coded password

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      router.push("/admin"); // goes to your admin page
    } else {
      setError("Wrong password");
    }
  };

  return (
    <main style={{ maxWidth: 400, margin: "80px auto", textAlign: "center" }}>
      <h2>Admin Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "8px", width: "100%", marginBottom: "12px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Login</button>
      </form>
    </main>
  );
}