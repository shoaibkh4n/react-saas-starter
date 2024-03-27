const LOCALSTORAGE_KEY = "token";

interface ApiOptions<T> {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  withAuth?: boolean;
  body?: T;
}

// interface JsonType {
//   [key: string]: any;
// }

// Helper function to generate headers
function createHeaders(withAuth: boolean = false): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (withAuth) {
    const token: string | null = localStorage.getItem(LOCALSTORAGE_KEY);
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return headers;
}

async function fetchWrapper<T>(options: ApiOptions<T>) {
  const { endpoint, method, withAuth = false, body } = options;
  const headers = createHeaders(withAuth);

  const config: RequestInit = {
    method,
    headers,
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      config
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Assuming all responses are JSON. Adjust if necessary.
    return response;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}

export default fetchWrapper;
