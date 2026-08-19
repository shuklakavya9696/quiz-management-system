import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo admin login details
    if (email === "admin@gmail.com" && password === "admin123") {
      window.location.href = "/admin-dashboard";
    } else {
      alert("Invalid Admin Email or Password!");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>
        <label>Email</label>

        <br />

        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        <label>Password</label>

        <br />

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        <b>Demo Login:</b>
      </p>

      <p>Email: admin@gmail.com</p>
      <p>Password: admin123</p>
    </div>
  );
}

export default AdminLogin;