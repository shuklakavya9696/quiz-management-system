import { useState, useEffect } from "react";

function Quiz() {
  const defaultQuestions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Management Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "CSS",
    },
  ];

  const savedQuestions = JSON.parse(
    localStorage.getItem("quizQuestions")
  );

  const questions = savedQuestions || defaultQuestions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [timeLeft, setTimeLeft] = useState(300);

  // Timer
  useEffect(() => {
    if (finished) {
      return;
    }

    if (timeLeft === 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Next / Submit
  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  // Save result
  useEffect(() => {
    if (finished) {
      const results =
        JSON.parse(localStorage.getItem("quizResults")) || [];

      const finalScore = score;
      const totalQuestions = questions.length;
      const percentage =
        (finalScore / totalQuestions) * 100;

      const newResult = {
        id: Date.now(),
        quizName: "Web Development Quiz",
        score: finalScore,
        totalQuestions: totalQuestions,
        percentage: percentage,
        date: new Date().toLocaleString(),
      };

      results.push(newResult);

      localStorage.setItem(
        "quizResults",
        JSON.stringify(results)
      );
    }
  }, [finished]);

  // Result Page
  if (finished) {
    const wrongAnswers = questions.length - score;

    const percentage =
      (score / questions.length) * 100;

    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>🎉 Quiz Completed!</h1>

        <h2>Web Development Quiz Result</h2>

        <hr />

        <h3>
          Total Questions: {questions.length}
        </h3>

        <h3>
          ✅ Correct Answers: {score}
        </h3>

        <h3>
          ❌ Wrong Answers: {wrongAnswers}
        </h3>

        <h3>
          📊 Percentage: {percentage}%
        </h3>

        <br />

        <button
          onClick={() => {
            window.location.href =
              "/student-dashboard";
          }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>Web Development Quiz</h1>

      {/* Timer */}
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          width: "150px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h3>⏱️ Time Left</h3>

        <h2>
          {minutes}:
          {seconds.toString().padStart(2, "0")}
        </h2>
      </div>

      {/* Question Number */}
      <h3>
        Question {currentQuestion + 1} of{" "}
        {questions.length}
      </h3>

      <hr />

      {/* Question */}
      <h2>
        {questions[currentQuestion].question}
      </h2>

      {/* Options */}
      <div style={{ marginTop: "20px" }}>
        {questions[currentQuestion].options.map(
          (option, index) => (
            <div
              key={index}
              style={{
                margin: "12px 0",
              }}
            >
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={
                    selectedAnswer === option
                  }
                  onChange={(e) =>
                    setSelectedAnswer(
                      e.target.value
                    )
                  }
                />

                {" "}

                {option}
              </label>
            </div>
          )
        )}
      </div>

      <br />

      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        style={{
          padding: "10px 25px",
        }}
      >
        {currentQuestion === questions.length - 1
          ? "Submit Quiz"
          : "Next"}
      </button>
    </div>
  );
}

export default Quiz;