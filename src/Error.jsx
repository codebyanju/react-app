import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  const { status, statusText } = error;

  console.log(error);
  return (
    <div>
      Error Component
      <div>Status: {status}</div>
      <div>statusText: {statusText}</div>
    </div>
  );
}
