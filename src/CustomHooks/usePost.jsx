import { useState } from "react";

const usePost = (endPoint, body) => {
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState();
  const handleClick = () => {
    endPoint(body)
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        setLoading(true);
      })
      .catch((err) => {
        console.log("🚀 ~ handleClick ~ err:", err);
        console.log("🚀 ~ usePost ~ loading:", loading);
        setLoading(false);
        setErr(err.response.data.error);
      });
  };
  return [loading, handleClick, err];
};

export default usePost;
