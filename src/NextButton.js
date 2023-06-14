function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === undefined) return;
  if (index < numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
}

export default NextButton;
