import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();

    console.error(error);
  return (
    <div>
        <h1>Ops!</h1>
        <p>Você teve um erro!</p>
        <p>{error.statusText}</p>
        <p>{error.status}</p>
    </div>
  )
}

export default ErrorPage