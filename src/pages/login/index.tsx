import { useState, useEffect } from "react";
import ApiClient from "../../api";
import { useRouter } from "next/router";

const AuthPage = () => {
  const [key, setKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for an existing key in local storage when the component mounts
    const existingKey = localStorage.getItem("key");

    if (existingKey) {
      const apiClient = new ApiClient();

      // Verify the existing key
      apiClient.verifyKey(existingKey).then((isValid) => {
        if (isValid) {
          // If the key is valid, set authentication to true and redirect to /admin
          setAuthenticated(true);
          router.push("/admin");
        }
      });
    }
  }, [router]);

  const handleAuthenticate = async () => {
    const apiClient = new ApiClient();

    const isValid = await apiClient.verifyKey(key);

    if (isValid) {
      setAuthenticated(true);
      localStorage.setItem("key", key);
      router.push("/admin");
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Admin Authentication</h2>
        <input
          type="text"
          className="mb-4 w-full rounded-md border p-2"
          placeholder="Enter your key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          className="w-full rounded-md bg-blue-500 p-2 text-white"
          onClick={handleAuthenticate}
        >
          Authenticate
        </button>
        {authenticated && (
          <p className="mt-2 text-green-500">Authentication successful!</p>
        )}
        {!authenticated && authenticated !== null && (
          <p className="mt-2 text-red-500">
            Authentication failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
