import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
      setScore(score + 10); // ✅ 10 marks per question
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowModal(true); // ✅ Show modal when quiz ends
    }
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setScore(0);
    setShowModal(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-2 relative">

      {/* ✅ RESULT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
            <p className="text-lg mb-2">Total Questions: {questions.length}</p>
            <p className="text-lg mb-2">
              Total Marks: {questions.length * 10}
            </p>
            <p className="text-xl font-bold mb-4 text-green-600">
              Your Score: {score}
            </p>

            <button
              onClick={restartQuiz}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}

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















// // ✅ Axios import API se data lene ke liye
// import axios from "axios";

// // ✅ React aur hooks import kiye
// import React, { useState, useRef, useEffect } from "react";

// function App() {

//   // ✅ All MCQs ka data store karega
//   const [questions, setQuestions] = useState([]);

//   // ✅ Ye track karta hai ke konsi question number show ho rahi hai
//   const [questionIndex, setQuestionIndex] = useState(0);

//   // ✅ Current question ke options store hotay hain
//   const [options, setOptions] = useState([]);

//   // ✅ User ka total score store hota hai
//   const [score, setScore] = useState(0);

//   // ✅ Quiz end hone par modal show karne ke liye
//   const [showModal, setShowModal] = useState(false);

//   // ✅ Radio input ko track karne ke liye ref use ho raha hai
//   const checkedInput = useRef([]);

//   // ✅ Ye useEffect API call karta hai jab page pehli dafa load hota hai
//   useEffect(() => {
//     axios("https://the-trivia-api.com/v2/questions").then((res) => {
//       setQuestions(res.data); // ✅ API se aaye huay questions state me save
//     });
//   }, []);

//   // ✅ Ye useEffect tab chalta hai jab:
//   // 1️⃣ Question change hota hai
//   // 2️⃣ Ya API se questions load hotay hain
//   useEffect(() => {
//     if (questions.length > 0) {
//       const arr = [
//         ...questions[questionIndex].incorrectAnswers, // ✅ wrong answers
//         questions[questionIndex].correctAnswer,        // ✅ correct answer
//       ];

//       setOptions(shuffleArray(arr)); // ✅ Options ko shuffle karta hai
//       checkedInput.current = [];     // ✅ Purane radio selections reset
//     }
//   }, [questionIndex, questions]);

//   // ✅ Ye function options ko random order me mix karta hai
//   function shuffleArray(array) {
//     let newArr = [...array];
//     for (let i = newArr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//     }
//     return newArr;
//   }

//   // ✅ Next button ka logic
//   function nextQuestion() {

//     // ✅ Check karta hai ke koi radio select hua ya nahi
//     const checkedRadio = checkedInput.current.find((el) => el?.checked);

//     // ✅ Agar answer select na ho to alert
//     if (!checkedRadio) {
//       alert("Answer select karo!");
//       return;
//     }

//     const selectedValue = checkedRadio.value; // ✅ User ka answer
//     const correctAnswer = questions[questionIndex].correctAnswer; // ✅ Sahi answer

//     // ✅ Agar answer sahi ho to 10 marks add
//     if (selectedValue === correctAnswer) {
//       setScore(score + 10);
//     }

//     // ✅ Agar aur questions baqi hain to next question
//     if (questionIndex < questions.length - 1) {
//       setQuestionIndex(questionIndex + 1);
//     } 
//     // ✅ Agar last question ho jaye to modal open
//     else {
//       setShowModal(true);
//     }
//   }

//   // ✅ Restart button ka function
//   function restartQuiz() {
//     setQuestionIndex(0); // ✅ Question dobara 1 se start
//     setScore(0);         // ✅ Score reset
//     setShowModal(false);// ✅ Modal band
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-2 relative">

//       {/* ✅ RESULT MODAL — sirf tab dikhe ga jab showModal true ho */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">

//             {/* ✅ Quiz finished heading */}
//             <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>

//             {/* ✅ Total questions */}
//             <p className="text-lg mb-2">Total Questions: {questions.length}</p>

//             {/* ✅ Total marks */}
//             <p className="text-lg mb-2">
//               Total Marks: {questions.length * 10}
//             </p>

//             {/* ✅ User ka score */}
//             <p className="text-xl font-bold mb-4 text-green-600">
//               Your Score: {score}
//             </p>

//             {/* ✅ Restart button */}
//             <button
//               onClick={restartQuiz}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Restart Quiz
//             </button>

//           </div>
//         </div>
//       )}

//       {/* ✅ Jab tak questions load hon */}
//       {questions.length > 0 ? (
//         <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-4 sm:p-6">

//           {/* ✅ App Title */}
//           <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4">
//             Quiz App
//           </h1>

//           {/* ✅ Question show hoti hai */}
//           <h2 className="text-base sm:text-lg font-semibold mb-4">
//             Q{questionIndex + 1}:{" "}
//             {questions[questionIndex].question.text}
//           </h2>

//           {/* ✅ Options list */}
//           <div className="space-y-3">
//             {options.map((item, index) => (
//               <label
//                 key={index}
//                 className="flex items-center gap-2 bg-gray-50 border p-2 rounded-md cursor-pointer hover:bg-gray-100"
//               >
//                 {/* ✅ Radio input */}
//                 <input
//                   type="radio"
//                   name="choice"
//                   value={item}
//                   ref={(el) => (checkedInput.current[index] = el)}
//                   className="w-4 h-4"
//                 />

//                 {/* ✅ Option text */}
//                 <span className="text-sm sm:text-base">{item}</span>
//               </label>
//             ))}
//           </div>

//           {/* ✅ Next Question Button */}
//           <button
//             onClick={nextQuestion}
//             className="w-full sm:w-auto mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Next
//           </button>

//           {/* ✅ Live score show */}
//           <h3 className="mt-4 text-center font-bold">
//             Score: {score}
//           </h3>
//         </div>
//       ) : (
//         // ✅ Jab tak API load ho rahi ho
//         <h1 className="text-xl font-bold">Loading...</h1>
//       )}
//     </div>
//   );
// }

// export default App;
