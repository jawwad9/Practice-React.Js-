import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const checkedInput = useRef([]);

  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const arr = [
        ...questions[questionIndex].incorrectAnswers,
        questions[questionIndex].correctAnswer,
      ];
      setOptions(shuffleArray(arr));
      checkedInput.current = [];
    }
  }, [questionIndex, questions]);

  function shuffleArray(array) {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  function nextQuestion() {
    const checkedRadio = checkedInput.current.find((el) => el?.checked);

    if (!checkedRadio) {
      alert("Answer select karo!");
      return;
    }

    const selectedValue = checkedRadio.value;
    const correctAnswer = questions[questionIndex].correctAnswer;

    if (selectedValue === correctAnswer) {
      setScore(score + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert(`Quiz Finished! Your Score: ${score + 1}`);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-2">
      {questions.length > 0 ? (
        <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-4 sm:p-6">
          <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4">
            Quiz App
          </h1>

          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Q{questionIndex + 1}:{" "}
            {questions[questionIndex].question.text}
          </h2>

          <div className="space-y-3">
            {options.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-2 bg-gray-50 border p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name="choice"
                  value={item}
                  ref={(el) => (checkedInput.current[index] = el)}
                  className="w-4 h-4"
                />
                <span className="text-sm sm:text-base">{item}</span>
              </label>
            ))}
          </div>

          <button
            onClick={nextQuestion}
            className="w-full sm:w-auto mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>

          <h3 className="mt-4 text-center font-bold">
            Score: {score}
          </h3>
        </div>
      ) : (
        <h1 className="text-xl font-bold">Loading...</h1>
      )}
    </div>
  );
}

export default App;
