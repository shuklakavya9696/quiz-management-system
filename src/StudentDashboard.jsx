import { useState } from "react";

function StudentDashboard() {
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("quizResults")) || []
  );

  const clearResults = () => {
    localStorage.removeItem("quizResults");
    setResults([]);
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Student Dashboard 🎓</h1>

      <h2>Welcome Student 👋</h2>

      <hr />

      {/* Available Quiz */}
      <h2>📝 Available Quiz</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          width: "300px",
          borderRadius: "8px",
        }}
      >
        <h3>Web Development Quiz</h3>

        <p>
          Test your knowledge of HTML, CSS and
          JavaScript.
        </p>

        <p>⏱️ Time: 5 Minutes</p>

        <button
          onClick={() => {
            window.location.href = "/quiz";
          }}
        >
          Start Quiz
        </button>
      </div>

      <hr />

      {/* Previous Attempts */}
      <h2>📊 Previous Attempts</h2>

      {results.length === 0 ? (
        <p>
          No quiz attempts yet. Complete a quiz to
          see your result here.
        </p>
      ) : (
        <div>
          {results.map((result, index) => (
            <div
              key={result.id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "8px",
              }}
            >
              <h3>
                Attempt {index + 1}
              </h3>

              <p>
                <b>Quiz:</b> {result.quizName}
              </p>

              <p>
                <b>Score:</b> {result.score} /{" "}
                {result.totalQuestions}
              </p>

              <p>
                <b>Percentage:</b>{" "}
                {result.percentage}%
              </p>

              <p>
                <b>Date:</b> {result.date}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Clear Results */}
      {results.length > 0 && (
        <button onClick={clearResults}>
          Clear Previous Results
        </button>
      )}

      <br />
      <br />

      {/* Logout */}
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default StudentDashboard;