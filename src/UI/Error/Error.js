const Error = ({ errorMessage }) => {
  return (
    <p className="error">
      <span>⛔ </span>
      {errorMessage}
    </p>
  );
};

export default Error;
