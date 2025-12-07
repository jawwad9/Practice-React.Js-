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




















// import axios from "axios"; 
// // ✅ axios API se data fetch karne ke liye use hota hai

// import React, { useState, useRef, useEffect } from "react";
// // ✅ useState = state manage karne ke liye
// // ✅ useRef = input ke reference ko pakarne ke liye
// // ✅ useEffect = component load hone par koi kaam karwane ke liye

// function App() {

//   // ✅ Ye state API se aane wale tamam questions ko store karegi
//   const [questions, setQuestions] = useState([]);

//   // ✅ Ye track karta hai ke abhi kaunsa question chal raha hai
//   const [questionIndex, setQuestionIndex] = useState(0);

//   // ✅ Isme current question ki shuffled options store hoti hain
//   const [options, setOptions] = useState([]);

//   // ✅ Ye user ke sahi jawab (score) ko count karta hai
//   const [score, setScore] = useState(0);

//   // ✅ Ye radio inputs ka reference store karta hai
//   const checkedInput = useRef([]);

//   // ✅ YE useEffect sirf 1 dafa chalta hai (component mount hone par)
//   // ✅ Isme API se questions fetch ho rahe hain
//   useEffect(() => {
//     axios("https://the-trivia-api.com/v2/questions").then((res) => {
//       setQuestions(res.data); // ✅ API se aaya hua data state me store
//     });
//   }, []);

//   // ✅ Ye useEffect har dafa chalta hai jab question change hota hai
//   // ✅ Har naye question ke options ko shuffle karta hai
//   useEffect(() => {
//     if (questions.length > 0) {
//       const arr = [
//         ...questions[questionIndex].incorrectAnswers, // ❌ ghalat options
//         questions[questionIndex].correctAnswer,       // ✅ sahi option
//       ];

//       setOptions(shuffleArray(arr)); // ✅ options ko mix kar diya
//       checkedInput.current = [];     // ✅ purane radio refs reset
//     }
//   }, [questionIndex, questions]);

//   // ✅ YE FUNCTION options ko random order me lagata hai
//   function shuffleArray(array) {
//     let newArr = [...array]; // ✅ original array ki copy

//     for (let i = newArr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));

//       // ✅ do values aapas me swap ho rahi hain
//       [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//     }

//     return newArr; // ✅ shuffled array return
//   }

//   // ✅ YE FUNCTION "Next" button par chalta hai
//   function nextQuestion() {

//     // ✅ check karta hai ke kaunsa radio checked hai
//     const checkedRadio = checkedInput.current.find((el) => el?.checked);

//     // ✅ agar user ne koi answer select nahi kiya
//     if (!checkedRadio) {
//       alert("Answer select karo!");
//       return;
//     }

//     // ✅ user ka selected answer
//     const selectedValue = checkedRadio.value;

//     // ✅ current question ka sahi answer
//     const correctAnswer = questions[questionIndex].correctAnswer;

//     // ✅ agar user ka answer sahi hai
//     if (selectedValue === correctAnswer) {
//       setScore(score + 1); // ✅ score +1 ho jaata hai
//     }

//     // ✅ agar abhi last question nahi aaya
//     if (questionIndex < questions.length - 1) {
//       setQuestionIndex(questionIndex + 1); // ✅ next question open
//     } 
//     // ✅ agar last question complete ho gaya
//     else {
//       alert(`Quiz Finished! Your Score: ${score + 1}`);
//       // ✅ yahan final result dikhaya ja raha hai
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-2">

//       {/* ✅ jab tak API se data nahi aata, Loading show hota hai */}
//       {questions.length > 0 ? (

//         <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-4 sm:p-6">

//           {/* ✅ App ka heading */}
//           <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4">
//             Quiz App
//           </h1>

//           {/* ✅ Question number aur question ka text */}
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

//                   // ✅ har radio ka reference store ho raha hai
//                   ref={(el) => (checkedInput.current[index] = el)}
//                   className="w-4 h-4"
//                 />

//                 {/* ✅ Option ka text */}
//                 <span className="text-sm sm:text-base">{item}</span>
//               </label>
//             ))}
//           </div>

//           {/* ✅ Next button */}
//           <button
//             onClick={nextQuestion}
//             className="w-full sm:w-auto mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Next
//           </button>

//           {/* ✅ Live score */}
//           <h3 className="mt-4 text-center font-bold">
//             Score: {score}
//           </h3>
//         </div>

//       ) : (
//         // ✅ jab data load ho raha hota hai
//         <h1 className="text-xl font-bold">Loading...</h1>
//       )}
//     </div>
//   );
// }

// export default App;


