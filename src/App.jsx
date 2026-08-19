import StudentLogin from "./StudentLogin";
import AdminLogin from "./AdminLogin";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import Quiz from "./Quiz";

function App() {
  const path = window.location.pathname;

  // Student Dashboard
  if (path === "/student-dashboard") {
    return <StudentDashboard />;
  }

  // Quiz
  if (path === "/quiz") {
    return <Quiz />;
  }

  // Admin Dashboard
  if (path === "/admin-dashboard") {
    return <AdminDashboard />;
  }

  // Student Login
  if (path === "/student-login") {
    return <StudentLogin />;
  }

  // Admin Login
  if (path === "/admin-login") {
    return <AdminLogin />;
  }

  // Home Page
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Quiz Management & Online Assessment Platform</h1>

      <p>Welcome to Online Quiz Platform</p>

      <br />

      <button
        onClick={() => {
          window.location.href = "/student-login";
        }}
      >
        Student Login
      </button>

      {" "}

      <button
        onClick={() => {
          window.location.href = "/admin-login";
        }}
      >
        Admin Login
      </button>
    </div>
  );
}

export default App;