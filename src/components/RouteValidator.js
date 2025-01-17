import { useParams, Navigate } from "react-router-dom";

function RouteValidator({ validIds, children }) {
  const { id } = useParams();
  if (!validIds.includes(id)) {
    return <Navigate to="/404" replace />;
  }
  return children;
}

export default RouteValidator;