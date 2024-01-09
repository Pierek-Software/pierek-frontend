import React from "react";
import { useAuth } from "../hooks/useAuth";

function withAuth(WrappedComponent) {
  return function AuthWrapper(props) {
    const { loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
