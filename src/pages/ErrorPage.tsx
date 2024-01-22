import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

type ErrorPageProps = {
  status?: number;
  msg?: string;
};

const ErrorPage = ({ status, msg }: ErrorPageProps) => {
  const error = useRouteError();
  let errorMessage = "";
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  if (status) errorStatus = status;
  if (msg) errorMessage = msg;

  return (
    <div>
      <Hero>
        <Banner title={errorStatus.toString()} subtitle={errorMessage}>
          <Link to="/" className="">
            Return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};
export default ErrorPage;
