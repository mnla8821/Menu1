import axios from "axios";
import axiosRetry from "axios-retry";

export const PublicAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  },
});

axiosRetry(PublicAxios, {
  retries: 8000, // number of retries
  retryDelay: axiosRetry.exponentialDelay, // delay between every retry
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});
