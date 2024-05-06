import Cookies from "js-cookie";

const host = "localhost";
const port = "8086";
const url = `http://${host}:${port}`;

const fetchWrapper = (
  apiEndpoint,
  method = "",
  body = null,
  signal = null,
  requireAuthToken = true
) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get("auth");

    if (requireAuthToken && !token) {
      reject("Auth Token Required");
    }

    fetch(`${url}${apiEndpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { auth: token }),
      },
      ...(signal && { signal: signal }),
      ...(body && { body: JSON.stringify(body) }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export default fetchWrapper;
