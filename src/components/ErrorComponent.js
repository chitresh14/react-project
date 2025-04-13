import { useRouteError } from 'react-router-dom';

// Define a basic Error component to display when an error occurs
const ErrorComponent = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Opps!, Something went wrong!!..</h1>
      <h3>{err.data}</h3>
    </div>
  );
};

export default ErrorComponent;
