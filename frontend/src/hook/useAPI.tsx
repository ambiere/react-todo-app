import axios from "axios";
import { useEffect, useState } from "react";
import { TodosInitialState } from "../store/reducer/todoContext";

export default function useAPI(endpoint: string) {
  const [data, setData] = useState<TodosInitialState | object[]>([]);

  async function getData(url: string) {
    try {
      const response = await axios.get(url);
      const apiData = await response.data;
      setData(apiData);
      console.log(response.config);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);
  return data;
}
