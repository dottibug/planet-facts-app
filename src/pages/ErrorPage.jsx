import { useRouteError } from 'react-router-dom';

// TODO Errors to handle:
// planet not found
// ...

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return <div style={{ color: 'white' }}>ERROR PAGE</div>;
}
