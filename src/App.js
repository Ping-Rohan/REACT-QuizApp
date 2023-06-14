import { useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import "./index.css";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import { useEffect } from "react";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataError":
      return { ...state, status: "Error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: undefined };

    case "finish":
      return { ...state, status: "finished" };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const questionsLength = state.questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataError" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main className="app">
        {state.status === "loading" && <Loader />}
        {state.status === "Error" && <Error />}
        {state.status === "ready" && (
          <StartScreen numQuestions={questionsLength} dispatch={dispatch} />
        )}
        {state.status === "active" && (
          <>
            <Progress
              numQuestions={questionsLength}
              i={state.index}
              points={state.points}
            />
            <Question
              question={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={state.answer}
              numQuestions={questionsLength}
              index={state.index}
            />
          </>
        )}
        {state.status === "finished" && (
          <FinishScreen
            points={state.points}
            index={state.index}
            numQuestions={questionsLength}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
