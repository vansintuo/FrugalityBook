import jsCookie from "js-cookie";
const token = jsCookie.get("user_token");

const postData = async (url, body) => {
  const author = JSON.parse(token || {});
  let data = {};
  if (token) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "x-access-token": author.accessToken,
          "Content-Type": "application/json ; charset = UTF-8",
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
    } catch (error) {
      console.log("error : ", error);
    }
  }
  return data;
};

export default postData;
