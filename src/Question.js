import QuestionOptions from "./QuestionOptions";
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <QuestionOptions question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
