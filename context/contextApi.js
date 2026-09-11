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
  const [search, setSearch] = useState("");

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

  const handleSubmit = async (recipe) => {
    try {
      const response = await api.post("/recipes", recipe);
      // Add the new recipe to local state so the UI updates immediately
      setData((prevData) => [...prevData, response.data]);
      return response.data;
    } catch (error) {
      console.error("Failed to submit recipe:", error);
      throw error;
    }
  };

  return (
    <contextData.Provider
      value={{ number, data, loading, search, setSearch, handleSubmit }}
    >
      {children}
    </contextData.Provider>
  );
}

export default ContextProvider;
