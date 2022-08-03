import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../UI/Spinner";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <Spinner />
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
