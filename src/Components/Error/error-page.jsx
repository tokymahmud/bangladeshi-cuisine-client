import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page ">
      <h1 className="text-center">ehhheeeee!!!!!!!</h1>
      <h1 className="fs-1 text-center">an unexpected error has occurred.</h1>
      <p>
        <i className="underline underline-offset-1 text-red-600	font-bold text-2xl">{error.statusText || error.message}</i>
      </p>
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1683183880~exp=1683184480~hmac=81df8ad93c54303234f79ec65e139524ec8bea88755b2b4af8b426c97b1e4711"></img>
      <p>Custom error element!!!!!!!</p>
    </div>
  );
}