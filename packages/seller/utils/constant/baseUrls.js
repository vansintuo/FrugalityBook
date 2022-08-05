const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const baseApiUrl =
  process.env.NODE_ENV !== "development" ? API_URL : "http://localhost:5555";

export { baseApiUrl };
