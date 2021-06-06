function ErrorMessages({ errors }) {
  return errors.map((error, index) => (
    <div key={(index, error)}>
      <small className="form-text text-danger">
        {error}
      </small>
    </div>
  ));
}

export default ErrorMessages;
