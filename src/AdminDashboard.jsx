import { useState } from "react";

function AdminDashboard() {
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

  const [questions, setQuestions] = useState(
    savedQuestions || defaultQuestions
  );

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const addQuestion = (e) => {
    e.preventDefault();

    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !answer
    ) {
      alert("Please fill all fields!");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      question: question,
      options: [option1, option2, option3, option4],
      answer: answer,
    };

    const updatedQuestions = [...questions, newQuestion];

    setQuestions(updatedQuestions);

    localStorage.setItem(
      "quizQuestions",
      JSON.stringify(updatedQuestions)
    );

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");

    alert("Question Added Successfully!");
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter(
      (item) => item.id !== id
    );

    setQuestions(updatedQuestions);

    localStorage.setItem(
      "quizQuestions",
      JSON.stringify(updatedQuestions)
    );

    alert("Question Deleted Successfully!");
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Admin Dashboard 👨‍💼</h1>

      <p>Welcome Admin!</p>

      <hr />

      <h2>➕ Add New Question</h2>

      <form onSubmit={addQuestion}>
        <label>Question</label>
        <br />

        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        <label>Option 1</label>
        <br />

        <input
          type="text"
          placeholder="Enter option 1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <br />
        <br />

        <label>Option 2</label>
        <br />

        <input
          type="text"
          placeholder="Enter option 2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <br />
        <br />

        <label>Option 3</label>
        <br />

        <input
          type="text"
          placeholder="Enter option 3"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <br />
        <br />

        <label>Option 4</label>
        <br />

        <input
          type="text"
          placeholder="Enter option 4"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <br />
        <br />

        <label>Correct Answer</label>
        <br />

        <select
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        >
          <option value="">Select Correct Answer</option>

          <option value={option1}>{option1}</option>
          <option value={option2}>{option2}</option>
          <option value={option3}>{option3}</option>
          <option value={option4}>{option4}</option>
        </select>

        <br />
        <br />

        <button type="submit">
          Add Question
        </button>
      </form>

      <hr />

      <h2>📋 All Questions</h2>

      {questions.map((item, index) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>
            Question {index + 1}: {item.question}
          </h3>

          {item.options.map((option, optionIndex) => (
            <p key={optionIndex}>
              {optionIndex + 1}. {option}
            </p>
          ))}

          <p>
            <b>Correct Answer:</b> {item.answer}
          </p>

          <button
            onClick={() => deleteQuestion(item.id)}
          >
            🗑️ Delete
          </button>
        </div>
      ))}

      <br />

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

export default AdminDashboard;