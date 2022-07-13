import jsCookie from "js-cookie";
const fetcher = async (url) => {
  const token = jsCookie.get("seller_token");
  if (token) {
    const author = JSON.parse(token || {});
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": author.accessToken,
        "Content-Type": "application/json ; charset=UTF-8",
      },
    });
    const data = await res.json();
    return data;
  }
};

export default fetcher;
