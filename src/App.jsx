import StudentLogin from "./StudentLogin";
import AdminLogin from "./AdminLogin";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import Quiz from "./Quiz";

function App() {
  const route = window.location.hash.replace("#", "") || "/";

  // Student Dashboard
  if (route === "/student-dashboard") {
    return <StudentDashboard />;
  }

  // Quiz
  if (route === "/quiz") {
    return <Quiz />;
  }

  // Admin Dashboard
  if (route === "/admin-dashboard") {
    return <AdminDashboard />;
  }

  // Student Login
  if (route === "/student-login") {
    return <StudentLogin />;
  }

  // Admin Login
  if (route === "/admin-login") {
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
          window.location.hash = "/student-login";
        }}
      >
        Student Login
      </button>

      {" "}

      <button
        onClick={() => {
          window.location.hash = "/admin-login";
        }}
      >
        Admin Login
      </button>
    </div>
  );
}

export default App;
