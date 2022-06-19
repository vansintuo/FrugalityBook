import jsCookie from "js-cookie"
const fetcher = async(url, body) => {
    const token  = jsCookie.get("user_token")
    console.log('body ::::::::::', JSON.stringify(body))
    console.log('token :::::::::', token)
    if(token){
        const author = JSON.parse(token || {})
        const res = await fetch(url, {
            method:'GET',
            headers:{
                "x-access-token" : author.accessToken,
                "Content-Type":"application/json ; charset=UTF-8"
            },
            body:JSON.stringify(body)
        })
        const data = await res.json()
        return data;
    }
}
 
export default fetcher;