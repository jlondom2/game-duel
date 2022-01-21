// useApi.js
import { useEffect, useState } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
    .then(response => {
      return response.json()
    })
    .then(json => {
      setLoading(false)
      setData(json.articles)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi;