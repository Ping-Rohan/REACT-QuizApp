function QuestionOptions({ question, dispatch, answer }) {
  const hasAnswered = answer !== undefined;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            disabled={hasAnswered}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionOptions;
