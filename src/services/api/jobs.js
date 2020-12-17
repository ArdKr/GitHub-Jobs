import axios from "axios";

const client = axios.create({
  // Using https://cors-anywhere.herokuapp.com/ because of CORS
  baseURL:
    "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json",
  //"https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json",
  // "https://jobs.github.com/positions.json",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Handles requests to the api
 *
 * @param {string} url
 * @param {object} params
 */
const request = (url = "", params = {}) => {
  const response = client.get(url, { params });
  return response;
};

/**
 * It gets max. 50 jobs from the api
 * because that's the amount that the api endpoint will display by default
 *
 * @param {string} url
 * @param {object} params
 */
export const getJobs = async (url = "", params = {}) => {
  const requestPromise = await request(url, params)
    .then((response) => {
      if (response.statusText === "OK") {
        return response.data;
      }
      throw new Error(response.statusText);
    })
    .catch((e) => {
      return Promise.reject(e.message);
    });

  return requestPromise;
};
