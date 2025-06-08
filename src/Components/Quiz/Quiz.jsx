import React from "react";
import "./Quiz.css";

const Quiz = () => {
  const [data, setData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [question, setQuestion] = React.useState(null);
  const [lock, setLock] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [result, setResult] = React.useState(false);

  const Option1 = React.useRef(null);
  const Option2 = React.useRef(null);
  const Option3 = React.useRef(null);
  const Option4 = React.useRef(null);
  const option_array = [Option1, Option2, Option3, Option4];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  React.useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((loadedData) => {
        const shuffled = shuffleArray(loadedData);
        const selectedTen = shuffled.slice(0, 10); // Pick only 10 questions
        setData(selectedTen);
        setQuestion(selectedTen[0]);
      });
  }, []);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        option_array[question.ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("wrong", "correct");
      });
    }
  };

  const reset = () => {
    const reshuffled = shuffleArray(data);
    setData(reshuffled);
    setIndex(0);
    setQuestion(reshuffled[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    option_array.forEach((option) => {
      option.current.classList.remove("wrong", "correct");
    });
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : question ? (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;