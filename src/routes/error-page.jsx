import { useRouteError } from "react-router-dom";
import Navigation from "../components/navigation";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <Navigation />
      <h1>Oops!</h1>
      <p>Jejda, tato stránka tady není.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}