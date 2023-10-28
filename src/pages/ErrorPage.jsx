import { useRouteError } from 'react-router-dom';

// TODO Errors to handle:
// page not found
// ...

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return <div>ERROR PAGE</div>;
}
