import { useEffect, useState } from "react";

const useGet = (endPiont) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    endPiont
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
        setLoading(true);
      });
  }, []);

  return [loading, data];
};

export default useGet;
