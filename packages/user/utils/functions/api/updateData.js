import jsCookie from "js-cookie";

const updateData = async (url, body) => {
  console.log("called update :::::::;");
  const token = jsCookie.get("seller_token");
  console.log("token::::::::::::", token);
  if (token) {
    const author = JSON.parse(token || {});
    let data = {};
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "x-access-token": author.accessToken,
          "Content-Type": "application/json ; charset=UTF-8",
        },
        body: JSON.stringify(body),
      });
      // we can convert to json file unless res is returned as json file ( key and value are string)
      data = await res.json();
    } catch (error) {
      console.log(error);
    }
    return data;
  }
};
export default updateData;
