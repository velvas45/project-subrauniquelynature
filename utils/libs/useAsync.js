import { useState, useEffect } from 'react';
import { myAxios } from '../axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const useAsync = (api, method, dataPost = null, defaultLoading = false) => {
  const [inProgress, setInProgress] = useState(defaultLoading);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (data) {
      setInProgress(true);
      if (method === 'GET') {
        (async function () {
          const result = await myAxios.get(api);
          setResponse(result);
        })();
      }
      if (method === 'POST') {
        (async function () {
          const result = await myAxios.post(api, dataPost);
          setResponse(result);
        })();
      }
    }
    return () => (isSubscribed = false);
  }, [refetch]);

  useEffect(() => {
    setError(false);
    if (response?.status === 200) {
      setInProgress(false);
      setData(response.data);
    }
  }, [response]);

  function reValidate() {
    setRefetch(!refetch);
  }

  return [data, inProgress, error, reValidate];
};

export default useAsync;
