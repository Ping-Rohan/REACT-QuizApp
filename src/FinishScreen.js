function FinishScreen({ points, dispatch }) {
  return (
    <>
      <p className="result">
        You scored <strong>{points} out of 280</strong>
      </p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
