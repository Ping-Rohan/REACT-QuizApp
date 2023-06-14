function Progress({ i, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Question{" "}
        <strong>
          {i + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points} / 280 Points</strong>
      </p>
    </header>
  );
}

export default Progress;
