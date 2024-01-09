import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ApiClient from "../api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const key = localStorage.getItem("key");

      if (!key) {
        setLoading(false);
        router.push("/login");
      }

      const apiClient = new ApiClient();
      const isValid = await apiClient.verifyKey(key);

      if (!isValid) {
        setLoading(false);
        localStorage.removeItem("key");
        router.push("/login");
      }

      setUser({ key });
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  return { user, loading };
};
