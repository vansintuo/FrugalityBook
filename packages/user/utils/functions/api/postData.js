const postData = async (url, body) => {
  let data = {}
  try {
    const res = await fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json ; charset = UTF-8",
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
  } catch (error) {
    console.log("error : ", error);
  }
  return data ;
};

export default postData;
