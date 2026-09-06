import axios from "axios";
import { useEffect, createContext, useState } from "react";

export const contextData = createContext();

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

function ContextProvider({ children }) {
  const [number, setNumber] = useState("1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const recipes = await api.get("/recipes");
        console.log("Fetched recipes:", recipes.data.length);
        setData(recipes.data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        console.log("Setting loading to false");
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <contextData.Provider value={{ number, data, loading }}>
      {children}
    </contextData.Provider>
  );
}

export default ContextProvider;
